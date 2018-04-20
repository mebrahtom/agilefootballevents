import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import MatchTable from "../components/MatchTable.js"
import GroupTable from "../components/GroupTable.js"
import ResultTable from "../components/ResultTable.js"

class FootballPage extends Component {

  render() {
    const results = renderResults();
    const upcoming = renderUpcoming();
    const groups = renderGroups();

    return (
        <div className ="container">
          <Tabs defaultActiveKey={1}id="tab_football">
            <Tab eventKey={1} title="Results">
              { /*Result Content Here */}
              {results}
            </Tab>
            <Tab eventKey={2} title="Upcoming Games">
              {upcoming}
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


function renderUpcoming() {
  var matches = [];

  matches.push(<MatchTable key={1}/>);

  return matches;
}

function renderResults() {
  var matches = [];

  matches.push(<ResultTable key={1}/>);

  return matches;
}

function renderGroups() {
  var groups = [];

  groups.push(<GroupTable key={1}/>);

  return groups;
}


export default FootballPage;
