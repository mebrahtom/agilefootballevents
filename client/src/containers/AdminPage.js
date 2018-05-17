import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import InsertResult from '../components/InsertResult'
import {Route,Redirect} from 'react-router-dom'
import store from '../store'
class AdminPage extends Component {
  render() {
    const token=localStorage.getItem('jwtToken');
    if(token==undefined){
      return <Redirect to="/login" />
    }
    return (
      <div>
        <InsertResult />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
