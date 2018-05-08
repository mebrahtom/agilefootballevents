import React, { Component } from 'react'
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'
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
      <div className="match-container">
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
          console.log('Response',response);
        })
    }
    UpdateResults(){
        var updates={
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
            body:JSON.stringify(updates)
        }).then(response=>response.json()).then(response=>{
          console.log('Response',response);
        })
    }

    render() {
      let groupOption=this.state.groups.map(group=>{
            return<option key={group}>{group}</option>
          });
        return (

          <div name = "resultForm">
            <Form horizontal className="formUpdate">
                  <FormGroup controlId="formHorizontalTeam">
                        <h1  align= 'center'>  Upcoming Match Number is: {this.props.matchnum} </h1>
                      <Col componentClass={ControlLabel} sm={2}>
                          Match Number
                      </Col>
                      <Col sm={2}>
                          <FormControl type="number" placeholder="matchNumber" value={this.state.matchNumbe} onChange={e=>this.setState({matchNumber:e.target.value})} min='1'/>

                      </Col>
                  </FormGroup>
                    <FormGroup controlId="formHorizontalTeam" align='center'>
                      <h1 align= 'center'>  Upcoming team1 is: {this.props.t1} </h1>
                        <Col componentClass={ControlLabel} sm={2}>
                            Team1
                        </Col>
                        <Col sm={2}>
                            <FormControl type="text" placeholder="Team1"   defaultValue = {this.state.t1} onChange={e=>this.setState({team1:e.target.value})}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="horizontalTeam">
                        <Col componentClass={ControlLabel} sm={2}>
                            Goals1
                        </Col>
                        <Col sm={2}>
                            <FormControl type="number" placeholder="Goals1" value={this.state.goals1} onChange={e=>this.setState({goals1:e.target.value})} min="0" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="horizontalTeam">
                      <h1 align= 'center'>  Upcoming team2 is: {this.props.t2} </h1>
                        <Col componentClass={ControlLabel} sm={2}>
                            Team2
                        </Col>
                        <Col sm={2}>
                            <FormControl type="text" placeholder="Team2" value={this.state.team2} onChange={e=>this.setState({team2:e.target.value})}  min="0"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="horizontalTeam">
                        <Col componentClass={ControlLabel} sm={2}>
                            goals2
                        </Col>
                        <Col sm={2}>
                            <FormControl type="number" placeholder="Goals2" value={this.state.goals2} onChange={e=>this.setState({goals2:e.target.value})} min='0'/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="horizontalTeam">
                      <h1 align= 'center' color='red'>  Upcoming group is: {this.props.g} </h1>
                        <Col componentClass={ControlLabel} sm={2}>
                            Group
                        </Col>
                        <Col sm={1}>
                        <select ref="group" placeholder="group" value= {this.state.groupName} onChange={e=>this.setState({groupName:e.target.value})}>
                              {groupOption}
                            </select><br/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={2}>
                            <Button type="submit" id="submit" onClick={()=>this.Insert()}> Save</Button>
                            <Button type="submit" id="submit" onClick={()=>this.UpdateResults()}> Update</Button>

                        </Col>
                    </FormGroup>
                </Form>
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
