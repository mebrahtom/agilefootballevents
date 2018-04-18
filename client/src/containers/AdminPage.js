import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'


class AdminPage extends Component {
  render() {
    const updateForm = renderForm();
    return (
      <div className = "container">
      {updateForm}
      </div>
    );
  }
}

class UpdateForm extends Component {
  constructor(props){
  super(props);

  this.handleChange = this.handleChange.bind(this);
  
  this.state = {
    teamOne: '',
    teamTwo: '',
    goalsOne: '',
    goalsTwo: ''
  };
  }

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  getValidation(e){
    // Handle validation for team names 
  }


  render() {
    return(
      <div name = "resultForm">
        <Form horizontal className="formUpdate">
        <Col><h3>Match Results</h3></Col>
          <FormGroup controlId="formHorizontalTeam">
            <Col componentClass={ControlLabel} sm={4}>
              Team 1
            </Col>
            <Col sm={8}>
             <FormControl type = "text" placeholder="Name: " name="teamOne" 
             value={this.state.teamOne} onChange={this.handleChange}/>
             <FormControl type = "number" placeholder="Goals:" 
             name="goalsOne" value={this.state.goalsOne} onChange={this.handleChange} min="0"/>
            </Col>
          </FormGroup> 

          <FormGroup controlId="formHorizontalTeam">
            <Col componentClass={ControlLabel} sm={4}>
              Team 2
            </Col>
            <Col sm={8}>
              <FormControl type="text" placeholder="Name:" name="teamTwo" 
              value={this.state.teamTwo} onChange={this.handleChange}/>
              <FormControl type="number" placeholder="Goals:" name="teamTwo" 
              value={this.state.goalsTwo} onChange={this.handleChange} min="0"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={8}>
              <Button type="submit">Update</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
    }
  }

  function renderForm(){

    return (<UpdateForm/>)

  }

export default AdminPage;
