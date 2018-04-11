import React, { Component } from 'react';
import logo from '../img/logo.png';
import './App.css';
import {Navbar, Nav, NavItem, Tabs, Tab, Table} from 'react-bootstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";
import MatchTable from "../components/MatchTable.js"
import HomePage from "../containers/HomePage.js"
import ExplorePage from "../containers/ExplorePage.js"

class App extends Component {
  render() {
    const home_page = () => (<HomePage/>);
    const football_page = () => ( <FootballPage/> );
    const explore_page = () => (<ExplorePage/>);

    return (
      <Router>
      <div className="app">
        <Header/>
        <Route exact path="/" component={home_page} />
        <Route path="/football" component={football_page} />
        <Route path="/explore" component={explore_page} />
      </div>
    </Router>
    );
  }
}


class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbar-custom">
        <Navbar.Header className="app-header">
          <Navbar.Brand>
            <a href="#brand" className="navbar-brand-custom"><img alt="" src={logo} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="app-header navbar-collapse-custom">
          <Nav pullRight className="nav-custom">
            <NavItem eventKey={1} href="/" >
              Home
            </NavItem>
            <NavItem eventKey={2} href="/football">
              Football
            </NavItem>
            <NavItem eventKey={2} href="/explore">
              Explore Gothenburg
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function renderMatches() {
  var matches = [];

  matches.push(<MatchTable/>);

  return matches;
}

function renderGroups() {
  var groups = [];

  for(var i = 0; i < 6; i++){

    groups.push(<GroupTable/>);
  }

  return groups;
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

class FootballPage extends Component {

  render() {
    const matches = renderMatches();
    const groups = renderGroups();

    return (
        <div class ="container">
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Results">
              { /*Result Content Here */}
              {matches}
            </Tab>
            <Tab eventKey={2} title="Upcoming Games">
              {matches}
            </Tab>
            <Tab eventKey={3} title="Groups">
              {/* Group content here*/}
              <div class="group-container">
                { groups }
                <div class="clearfix"></div>
              </div>
            </Tab>
          </Tabs>
        </div>
    );
  }
}


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

export default App;
