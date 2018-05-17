import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'

class AdminLoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      authError: '',
      errors: {}
    }
  }
  validateInput() {
    let errors = {};
    let formIsValid = true;
    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    }
    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "Password is required";
    }
    if (typeof this.state.email !== "undefined") {
      let lastAtPos = this.state.email.lastIndexOf('@');
      let lastDosPos = this.state.email.lastIndexOf('.');
      if (!(lastAtPos < lastDosPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDosPos > 2 && (this.state.email.length - lastDosPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  adminLogin() {
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };
    if (this.validateInput()) {
      fetch("http://localhost:8000/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
        .then(response => response.json())
        .then(data => {
          if (data.validLogin) {
            localStorage.setItem('jwtToken', data.token)
            this.props.history.push('/admin');
          }
          else {
            this.setState({ authError: 'Wrong email and/or password comibination' });
          }
        })
    }
  }
  render() {
    return (
      <div className="container">
      <span style={{ color: "#cc0000" }}>{this.state.authError}</span>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={6}>
              <FormControl type="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
              <span style={{ color: "#cc0000" }}>{this.state.errors["email"]}</span>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={6}>
              <FormControl type="password" placeholder="Enter password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
              <span style={{ color: "#cc0000" }}>{this.state.errors["password"]}</span>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <Button onClick={() => this.adminLogin()}>Login</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginPage)
