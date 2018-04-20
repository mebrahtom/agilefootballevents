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
    this.props.getAllgroupresults();
  }

  render() {
    const images = importAll(require.context('../img/flags', false, /\.(png)$/));
    const tables = renderTables(this.props.groups, this.props.groupresults, images);
    console.log('render');
    return(
      <div className ="hejsan">
        {tables}
      </div>
    );
  }
}

function renderTables(groups, groupresults, images) {
  var allTables = [];
  console.log(groups.length );
  for(var i = 0; i < groups.length; i++){
    /* Adding the table and label*/
    allTables.push(
      <div className="col-md-6">
        <h4>
          {"Group " + groups[i].groupName}
        </h4>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th className="col-sm-4">Team</th>
              <th className="col-sm-1">MP</th>
              <th className="col-sm-1">W</th>
              <th className="col-sm-1">D</th>
              <th className="col-sm-1">L</th>
              <th className="col-sm-1">P</th>
            </tr>
          </thead>
          <tbody>
            {renderGroupRows(groupresults, groups[i].groupName, images)}
          </tbody>
        </Table>
      </div>


    );
  }
  console.log(allTables);
  return allTables;
}

function renderGroupRows(groupresults, currGroupname, images) {

  var grouprow = [];

  /* Check if groupresults.groupname is the same as groups.groupname. then go ahead. */

  for(var i = 0; i < groupresults.length; i++){

    if(groupresults[i].groupName === currGroupname){

      grouprow.push(
        <tr>
          {/* TODO add flags to the team */}
          <td><img src={images[groupresults[i].team+".png"]} alt={''} width={15} height={10} /> {groupresults[i].team} </td>
          <td>{groupresults[i].MP}</td>
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

/* Importing all images */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
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
