import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'

class LoginPage extends Component {
  render() {
    return (
      <div class="loginForm">
        <Form horizontal className="formGroupCustom">
          <FormGroup controlId="formHorizontalUsername">
            <Col componentClass={ControlLabel} sm={4}>
              Username
            </Col>
            <Col sm={8}>
              <FormControl type="username" placeholder="Username" />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={4}>
              Password
            </Col>
            <Col sm={8}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={4} sm={8}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default LoginPage;



