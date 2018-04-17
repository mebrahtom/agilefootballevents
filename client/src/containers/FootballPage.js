import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MatchTable from "../components/MatchTable.js"
import GroupTable from "../components/GroupTable.js"

class FootballPage extends Component {

  render() {
    const matches = renderMatches();
    const groups = renderGroups();

    return (
        <div className ="container">
          <Tabs defaultActiveKey={1}id="tab_football">
            <Tab eventKey={1} title="Results">
              { /*Result Content Here */}
              {matches}
            </Tab>
            <Tab eventKey={2} title="Upcoming Games">
              {matches}
            </Tab>
            <Tab eventKey={3} title="Groups">
              {/* Group content here*/}
              <div className="group-container">
                { groups }
                <div className="clearfix"></div>
              </div>
            </Tab>
          </Tabs>
        </div>
    );
  }
}


function renderMatches() {
  var matches = [];

  matches.push(<MatchTable key={1}/>);

  return matches;
}

function renderGroups() {
  var groups = [];

  for(var i = 0; i < 8; i++){

    groups.push(<GroupTable key={i}/>);
  }

  return groups;
}


export default FootballPage;
