import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import InsertResult from '../components/InsertResult'
import {Redirect} from 'react-router-dom'
class AdminPage extends Component {
  render() {
    const token=localStorage.getItem('jwtToken');
    if(token==null){
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
