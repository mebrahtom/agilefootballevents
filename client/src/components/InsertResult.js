import React, { Component } from 'react'
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'
import Moment from 'react-moment';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Row} from 'react-bootstrap'

class InsertResult extends Component{
  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllUpcomingMatches().then(() => {
      //console.log(this.props.upcomingmatches)
    })
  }
  render(){
    const gmatches = renderMatchRows(this.props.upcomingmatches);
    return(
      <div className='container'>
        {gmatches}
      </div>
    );
  }
}

function renderMatchRows(upcomingmatches){
  var matches = [];
  var counter=0;
for(var i = 0; i< upcomingmatches.length; i++  ){
  /* Push the data from database to the MatchRow and create rows*/
     matches.push(<Upcomings key ={i}
      date={upcomingmatches[i].playingDate + ' ' + upcomingmatches[i].playingTime}
      matchnum={upcomingmatches[i].matchNumber}
      g={upcomingmatches[i].groupName}
      t={upcomingmatches[i].terminator}
      t1={upcomingmatches[i].team1}
      t2={upcomingmatches[i].team2}
      fn1={upcomingmatches[i].fullName1}
      fn2={upcomingmatches[i].fullName2}
      loc={upcomingmatches[i].stadium}
     />);
     counter++;
     if(counter===2)
     return matches;
  }
}
class Upcomings extends Component {
  constructor(props){
      super(props)
      this.state={
        matchNumber: '',
        team1: '',
        team2: '',
        goals1: 0,
        goals2: 0,
        groups: ['  ', 'GroupName', 'A','B','C','D','E','F','G','H']
      }
      //this.handleSubmit=this.handleSubmit().bind(this);
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
      fetch("http://localhost:8000/update_ongoing",{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
      }).then(response=>response.json()).then(response=>{
          console.log('Response',response);
      })
  }
    handleOnClick(e) {
     this.setState({team1:(this.props.t1)});
     this.setState({team2:(this.props.t2)});
     this.setState({matchNumber:(this.props.matchnum)});
     this.setState({groupName:(this.props.g)});
     //this.setState({team2:e.target.value});
    }
    Clear(e) {
     this.setState({team1:' '});
     this.setState({team2:' '});
     this.setState({matchNumber:' '});
     this.setState({groupName:' '});
     //this.setState({team2:e.target.value});
    }
    render() {
      let groupOption=this.state.groups.map(group=>{
            return<option key={group}>{group}</option>
          });

      const images = importAll(require.context('../img/flags', false, /\.(png)$/));
        return (
        <div>
  <Row className="match-cell">
        <Col  xs={6} md={6} lg={8}>
          <Form horizontal className="formUpdate">
            <FormGroup className="horizontalTeam" align='center'>
                <ControlLabel> Team 1 </ControlLabel>
                <FormControl type="text" placeholder="Team Abbreviation" value = {this.state.team1} onChange={e=>this.setState({team1:e.target.value})} />
                <FormControl type="number" placeholder="Goals" value={this.state.goals1} onChange={e=>this.setState({goals1:e.target.value})} min="0" />
            </FormGroup>
              <FormGroup className="horizontalTeam" align='center'>
                  <ControlLabel>Team 2</ControlLabel>
                  <FormControl type="text" placeholder="Team Abbreviation" value={this.state.team2} onChange={e=>this.setState({team2:e.target.value})}/>
                  <FormControl type="number" placeholder="Goals" value={this.state.goals2} onChange={e=>this.setState({goals2:e.target.value})} min='0'/>
              </FormGroup>
                  <FormGroup className="horizontalTeam" align='center'>
                      <ControlLabel>Group</ControlLabel>
                      <br></br>
                      <select ref="group" placeholder="group" value= {this.state.groupName} onChange={e=>this.setState({groupName:e.target.value})}>
                          {groupOption}
                      </select>
                  </FormGroup>
                  <FormGroup className="horizontalTeam">
                      <FormControl type="number" placeholder="Match Number" value={this.state.matchNumber} onChange={e=>this.setState({matchNumber:e.target.value})}/>
                  </FormGroup>
                  <FormGroup className="horizontalTeam" align='center'>
                    <Button type="submit" id="submit" onClick={()=>this.InsertOnGoing()}> Start Game </Button>
                      <Button type="submit" id="submit" onClick={()=>this.UpdateOnGoing()}> Update OnGoing </Button>
                      <Button type="submit" id="submit" onClick={()=>this.Insert()}> Save Result</Button>
                      <Button type="submit" id="submit" onClick={()=>this.UpdateFinal()}> Update Final </Button><br/>
                      <Button type="submit" id="submit" onClick={()=>this.Clear()}> Clear </Button>
                  </FormGroup>
              </Form>
          </Col>
          <Col className="formInfo" xs={3} md={3} lg={4}>
                <Row className='upcomingInfo'>
                    <h2> Live Game</h2>
                </Row>
                  <Row className='upcomingInfo'>
                    <Col sm={3}>
                      <br />
                      <Moment parse="YYYY-MM-DD HH:mm" format="DD MMM HH:mm">{this.props.date}</Moment>
                    </Col>
              <Col sm={3}>
                  <img onClick = {this.handleOnClick.bind(this)} sm={1} src={images[this.props.fn1+'.png']} alt={''} width={35} height={25}/>
                  <br/>
                  <div className="ccodetext"  onClick = {this.handleOnClick.bind(this)}>{this.props.fn1}</div>
              </Col>
              <Col sm={1}>
                {this.props.t}
              </Col>
              <Col sm={3}>
                  <img onClick = {this.handleOnClick.bind(this)} sm={1} src={images[this.props.fn2+'.png']} alt={''} width={35} height={25}/>
                  <br />
                  <div className="ccodetext" onClick = {this.handleOnClick.bind(this)} >{this.props.fn2}</div>
              </Col>
              </Row>
              {/* Collapse Div*/}
            </Col>
            </Row>
        </div>
        );
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
