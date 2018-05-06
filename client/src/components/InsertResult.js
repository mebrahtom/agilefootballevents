import React, { Component } from 'react'
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Row } from 'react-bootstrap'
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

for(var i = 0; i < 1; i++ ){
  /* Push the data from database to the MatchRow and create rows*/
    matches.push(<MatchRow key ={i}
      matchnum={upcomingmatches[i].matchNumber}
      g={upcomingmatches[i].groupName}
      t1={upcomingmatches[i].team1}
      t2={upcomingmatches[i].team2}
     />);
  }

  return matches;
}

class MatchRow extends Component {
    constructor(props){
        super(props)
        this.state={
          matchNumber: '',
          team1: '',
          team2: '',
          goals1: '',
          goals2: ' ',
          groups: ['  ', 'GroupName', 'A','B','C','D','E','F','G','H']
        }
        //this.handleSubmit=this.handleSubmit().bind(this);
    }

    Insert(){
       //e.preventDefault()                                                                                           `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````   `
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
            alert('Sucessfully Saved');
        })
    }
    render() {
      let groupOption=this.state.groups.map(group=>{
            return<option key={group}>{group}</option>
          });

        return (
        <div>
          <Col align='center' xs={12} md={12} lg={12}> <h1 className='updateHeader'> Update Results </h1> </Col>
          <Col  xs={9} md={9} lg={9}>
            <Form horizontal className="formUpdate">
                <FormGroup className="horizontalTeam" align='center'>
                    <ControlLabel> Team 1 </ControlLabel>
                    <FormControl type="text" placeholder="Team Abbreviation"   defaultValue = {this.state.t1} onChange={e=>this.setState({team1:e.target.value})}/>
                    <FormControl type="number" placeholder="Goals" value={this.state.goals1} onChange={e=>this.setState({goals1:e.target.value})} min="0" />
                </FormGroup>
                <FormGroup className="horizontalTeam" align='center'>
                    <ControlLabel>Team 2</ControlLabel>
                    <FormControl type="text" placeholder="Team Abbreviation" value={this.state.team2} onChange={e=>this.setState({team2:e.target.value})}  min="0"/>
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
                        <FormControl type="number" placeholder="Match Number" value={this.state.matchNumbe} onChange={e=>this.setState({matchNumber:e.target.value})} min={this.props.matchnum}/>
                    </FormGroup>
                    <FormGroup className="horizontalTeam" align='center'>
                        <Button type="submit" id="submit" onClick={()=>this.Insert()}> Save</Button>
                    </FormGroup>

                </Form>
            </Col>
            <Col className="formInfo" xs={3} md={3} lg={3}>
                <Row className='upcomingInfo'>
                    <h2> Next Fixture </h2>
                </Row>
                <Row className='upcomingInfo'>
                    <h4>  Match Number</h4>    
                    {this.props.matchnum}
                </Row>        
                <Row className='upcomingInfo'>
                    <h4>  Team 1 </h4> 
                    {this.props.t1}
                </Row> 
                <Row className='upcomingInfo'>          
                    <h4>  Team 2</h4>   
                    {this.props.t2} 
                </Row>      
                <Row className='upcomingInfo'>   
                    <h4>  Group </h4>
                    {this.props.g}
                </Row>
            </Col>
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
