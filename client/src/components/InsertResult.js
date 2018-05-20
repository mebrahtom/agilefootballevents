import React, { Component } from 'react'
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Row} from 'react-bootstrap'
import UpcomingSmall from '../components/UpcomingSmall.js'

class InsertResult extends Component{

  constructor(props){
      super(props);
      this.state={
        matchNumber: '',
        team1: 'Team 1',
        team2: 'Team 2',
        goals1:  '',
        goals2: '',
        group: ''
      }
      //this.handleSubmit=this.handleSubmit().bind(this);
  }

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllUpcomingMatches().then(() => {
      //console.log(this.props.upcomingmatches)
    })
  }


  render(){
    //const gmatches = renderMatchRows(this.props.upcomingmatches);
    return(
      <div className='container'>
        <Row>
          <Col md={8}>
            <Form horizontal className="formUpdate">
              <FormGroup className="horizontalTeam" align='center'>
                  <ControlLabel> {this.state.team1} </ControlLabel>
                  <FormControl type="number" placeholder="Goals" value={this.state.goals1} onChange={e=>this.setState({goals1:e.target.value})} min="0" />
              </FormGroup>
                <FormGroup className="horizontalTeam" align='center'>
                    <ControlLabel>{this.state.team2}</ControlLabel>
                    <FormControl type="number" placeholder="Goals" value={this.state.goals2} onChange={e=>this.setState({goals2:e.target.value})} min='0'/>
                </FormGroup>
                    <FormGroup className="horizontalTeam" align='center'>
                        <ControlLabel>Group: {this.state.groupName}</ControlLabel>
                        <br></br>
                    </FormGroup>
                    <FormGroup className="horizontalTeam" align='center'>

                        <Button type="submit" id="submit" onClick={()=>this.Insert()}> Save Result</Button>

                    </FormGroup>
                </Form>
          </Col>
          <Col md ={4}>
            <div>
              <p className="info-heading">Games</p>
              {this.renderUpComingGames(this.props.upcomingmatches)}
            </div>
          </Col>
        </Row>

      </div>
    );
  }
/*  <Button type="submit" id="submit" onClick={()=>this.InsertOnGoing()}> Start Game </Button>
    <Button type="submit" id="submit" onClick={()=>this.UpdateOnGoing()}> Update OnGoing </Button>
  <Button type="submit" id="submit" onClick={()=>this.UpdateFinal()}> Update Final </Button><br/>
  <Button type="submit" id="submit" onClick={()=>this.Clear()}> Clear </Button>*/

  setForm(match){
    this.setState({
      matchNumber: match.matchNumber,
      team1: match.team1,
      team2: match.team2,
      goals1: match.goals1 != null ? match.goals1 : 0,
      goals2:  match.goals1 != null ? match.goals1 : 0,
      groupName: match.groupName});

    console.log('clicked', match)
  }

  renderUpComingGames(matches){

    var match_elements = [];
    if(matches != null){
      match_elements = matches.map((match, index) => <UpcomingSmall key={index} match={match} onMatchClicked={() => this.setForm(match)}/>);
    }

      if(match_elements.length === 0 ){
        match_elements.push(<p>No upcoming matches yet</p>);
      }
    return match_elements;
  }

  Insert(){
      var data={
          matchNumber:this.state.matchNumber,
          team1:this.state.team1,
          goals1:this.state.goals1,
          team2:this.state.team2,
          goals2:this.state.goals2,
          groupName:this.state.groupName
      }

      if(data.matchNumber === ''){
        return;
      }

      fetch("http://localhost:8000/save_results",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      }).then(response=>response.json()).then(response=>{
          console.log('Response',response);
      })
  }

  UpdateFinal(){
      var data={
          matchNumber:this.state.matchNumber,
          team1:this.state.team1,
          goals1:this.state.goals1,
          team2:this.state.team2,
          goals2:this.state.goals2,
          groupName:this.state.groupName
      }

      if(data.matchNumber === ''){
        return;
      }

      fetch("http://localhost:8000/update_results",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      }).then(response=>response.json()).then(response=>{
          console.log('Response',response);
      })
  }

  InsertOnGoing(){
      var data={
          matchNumber:this.state.matchNumber,
          team1:this.state.team1,
          goals1:this.state.goals1,
          team2:this.state.team2,
          goals2:this.state.goals2,
          groupName:this.state.groupName
      }

      if(data.matchNumber === ''){
        return;
      }

      fetch("http://localhost:8000/save_ongoing",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      }).then(response=>response.json()).then(response=>{
          console.log('Response',response);
      })
  }

  UpdateOnGoing(){
      var data={
          matchNumber:this.state.matchNumber,
          team1:this.state.team1,
          goals1:this.state.goals1,
          team2:this.state.team2,
          goals2:this.state.goals2,
          groupName:this.state.groupName
      }

      if(data.matchNumber === ''){
        return;
      }

      fetch("http://localhost:8000/update_ongoing",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      }).then(response=>response.json()).then(response=>{
          console.log('Response',response);
      })
  }

  Clear(e) {
   this.setState({team1:' '});
   this.setState({team2:' '});
   this.setState({matchNumber:' '});
   this.setState({groupName:' '});
   //this.setState({team2:e.target.value});
  }


}
function mapStateToProps(state) {
  return {
    upcomingmatches: state.upcomingmatches
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(InsertResult)
