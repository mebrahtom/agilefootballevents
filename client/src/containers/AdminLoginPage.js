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
        password: ''
    }
  }

  adminLogin() {
    let email = this.state.email
    let password = this.state.password
    this.props.loginAdmin(email, password).then(() => {
      if (this.props.admin !== '') {
        this.props.history.push('/admin')
      }
    })
  }

  render() {
    return (
      <div className="container">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={6}>
              <FormControl type="email" placeholder="Email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={6}>
              <FormControl type="password" placeholder="Enter password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <Button onClick={()=>this.adminLogin()}>Login</Button>
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
