import React, { Component } from 'react';
import { Button, Row, Col, Panel, Table} from 'react-bootstrap';

class GroupTable extends Component {
  render() {
    const grows = renderGroupRows();
    return(
      <div class="col-md-6">
        <h4>
          <strong>Group x</strong>
        </h4>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th class="col-sm-4">Team</th>
              <th class="col-sm-1">W</th>
              <th class="col-sm-1">D</th>
              <th class="col-sm-1">L</th>
              <th class="col-sm-1">P</th>
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
function renderGroupRows() {

  var grouprow = [];

  for(var i = 0; i < 6; i++){
    // TODO Maybe this should be a component class. In that way we can
    // have props and load
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

export default GroupTable;
