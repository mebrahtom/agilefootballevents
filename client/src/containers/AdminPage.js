import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import InsertResult from '../components/InsertResult'
/*import { Redirect } from 'react-router';*/

class AdminPage extends Component {
  render() {


    /*
    Should add this. But we have no way to check if user is logged in yet
    if (this.props.admin === '') {
      return <Redirect push to="/login" />;
    }*/
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
