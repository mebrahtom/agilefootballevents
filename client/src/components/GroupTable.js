import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class GroupTable extends Component {

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllGroups().then(() => {
    })
    this.props.getAllgroupresults()
  }

  render() {
    const tables = renderTables(this.props.groups, this.props.groupresults);
    return(
      <div className="col-md-6">
        {tables}
      </div>
    );
  }
}

function renderTables(groups, groupresults) {
  var allTables = [];

  for(var i = 0; i < groups.length; i++){
    {/* Adding the table and label*/}
    allTables.push(
      <div>
        <h4>
          {"Group " + groups[i].groupName}
        </h4>   

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th className="col-sm-4">Team</th>
              <th className="col-sm-1">W</th>
              <th className="col-sm-1">D</th>
              <th className="col-sm-1">L</th>
              <th className="col-sm-1">P</th>
            </tr>
          </thead>
          <tbody>
            {renderGroupRows(groupresults, groups[i].groupName)}
          </tbody>
        </Table>
      </div>

      
    );
  }
  return allTables;
}

function renderGroupRows(groupresults, currGroupname) {

  var grouprow = [];

  {/* Check if groupresults.groupname is the same as groups.groupname. then go ahead. */}

  for(var i = 0; i < groupresults.length; i++){

    if(groupresults[i].groupName == currGroupname){

      grouprow.push(
        <tr>
          {/* TODO add flags to the team */}
          <td>{groupresults[i].team}</td>
          <td>{groupresults[i].W}</td>
          <td>{groupresults[i].D}</td>
          <td>{groupresults[i].L}</td>
          <td>{groupresults[i].points}</td>
        </tr>
      );
    }
  }

  return grouprow;
}

function mapStateToProps(state) {
  return {
    groups : state.groups,
    groupresults : state.groupresults
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupTable);
