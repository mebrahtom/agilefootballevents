import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class GroupTable extends Component {

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllMatches().then(() => {
      //console.log(this.props.matches)
    })
    this.props.getAllUpcomingMatches().then(() => {
     // console.log(this.props.upcomingmatches)
    })
    this.props.getAllGroups().then(() => {
      console.log(this.props.groups)
    })
  }

  render() {
    const grows = renderGroupRows();
    const tableLabels = createLabels(this.props.groups);
    return(
      <div className="col-md-6">
        <h4>
          {this.props.label}
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
          { grows }
        </tbody>
        </Table>
      </div>
    );
  }
}


function createLabels(groups){
  var tableLabels = [];

  for(var i = 0; i < groups.length; i++){
    
    tableLabels.push(<GroupTable key = {i}
      label = {groups[i].groupName}/>
    );
  }
  return tableLabels;

}

function renderGroupRows() {

  var grouprow = [];

  for(var i = 0; i < 6; i++){

    grouprow.push(
      <tr>
        <td>Team Name</td>
        <td>#Won</td>
        <td>#Draws</td>
        <td>#Losses</td>
        <td>#Points</td>
      </tr>
    );
  }

  return grouprow;
}

function mapStateToProps(state) {
  return {
    matches: state.matches,
    upcomingmatches: state.upcomingmatches,
    groups : state.groups
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupTable);
