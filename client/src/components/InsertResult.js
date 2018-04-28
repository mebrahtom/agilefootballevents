import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'
class InsertResult extends Component {
    constructor(props){
        super(props)
        this.state={
          teamOne: '',
          teamTwo: '',
          goalsOne: '',
          goalsTwo: ' ',
          groups: ['  ','GroupName', 'A','B','C','D','E','F','G','H']
        }
        //this.handleSubmit=this.handleSubmit().bind(this);
    }

    Insert(){
       //e.preventDefault()                                                                                           `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````   `
        var data={
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
            /*if(response.success){
                this.setState({

                })
            }
            else{
                this.setState({

                })
            }*/
        })
    }
    render() {
      let groupOption=this.state.groups.map(group=>{
            return<option key={group}>{group}</option>
          });
        return (
            <div className="container">
              <label><h3>Match Results</h3></label>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalteamOne">
                        <Col componentClass={ControlLabel} sm={2}>
                            Team1
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Team1" value={this.state.team1} onChange={e=>this.setState({team1:e.target.value})} min="0" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalgoalsOne">
                        <Col componentClass={ControlLabel} sm={2}>
                            Goals1
                        </Col>
                        <Col sm={6}>
                            <FormControl type="number" placeholder="Goals1" value={this.state.goals1} onChange={e=>this.setState({goals1:e.target.value})} min="0" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalteamTwo">
                        <Col componentClass={ControlLabel} sm={2}>
                            Team2
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Team2" value={this.state.team2} onChange={e=>this.setState({team2:e.target.value})}  min="0"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalgoalsTwo">
                        <Col componentClass={ControlLabel} sm={2}>
                            goals2
                        </Col>
                        <Col sm={6}>
                            <FormControl type="number" placeholder="Goals2" value={this.state.goals2} onChange={e=>this.setState({goals2:e.target.value})}  min="0" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalgrouName">
                        <Col componentClass={ControlLabel} sm={2}>
                            group
                        </Col>
                        <Col sm={6}>
                          <form>
                          <select ref="group" controlId="formHorizontalgroupName" placeholder="select group" value={this.state.groupName} onChange={e=>this.setState({groupName:e.target.value})} >
                            {groupOption}
                          </select>
                          </form>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={6}>
                            <Button type="submit" id="submit" onClick={()=>this.Insert()}> Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default InsertResult;
