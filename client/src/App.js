import React, { Component } from 'react';

import logo from './img/logo.png';
import './App.css';

import { Button, Row, Col, Navbar, Nav, NavItem, Tabs, Tab, Table, Panel} from 'react-bootstrap';




class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <MatchTable/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbar-custom">
        <Navbar.Header className="app-header">
          <Navbar.Brand>
            <a href="#brand" className="navbar-brand-custom"><img src={logo} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="app-header navbar-collapse-custom">
          <Nav pullRight className="nav-custom">
            <NavItem eventKey={1} href="#home" >
              Home
            </NavItem>
            <NavItem eventKey={2} href="#football">
              Football
            </NavItem>
            <NavItem eventKey={2} href="#exploration">
              Explore gothenburg
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function renderMatches() {
  var matches = [];

  for(var i = 0; i < 10; i++ ){
    matches.push(<MatchRow/>);
  }

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

class MatchTable extends Component {

  render() {
    const matches = renderMatches();
    const groups = renderGroups();

    return (
        <div class ="container">
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Results">
              { /*Result Content Here */}
              <div className="match-container">
                { matches }
                <div className="center-hz">
                  <Button>Show more</Button>
                </div>
              </div>
              
            </Tab>
            <Tab eventKey={2} title="Upcoming Games">
              {/* Upcoming Games content here*/}
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

class MatchRow extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <Row className="match-cell" onClick={() => this.setState({ open: !this.state.open })}>
        <Col sm={2}>
          Date
        </Col>
        <Col sm={3}>
          Team 1
        </Col>
        <Col sm={2}>
          x - x
        </Col>
        <Col sm={3}>
          Team 2
        </Col>
        <Col sm={2}>
          Location
        </Col>
        {/* Collapse Div*/}
        <Panel id="collapseable-panel" expanded={this.state.open}>
          <Panel.Collapse>
            <Panel.Body>
              Information about the game....
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </Row>

    );
  }
}

class GroupTable extends Component {
  render() {
    const grows = renderGroupRows();
    return(
      <div class="col-md-6 col-xs-12">
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
