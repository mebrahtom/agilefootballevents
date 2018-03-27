import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

import { Button, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

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
            <a href="#brand"><img src={logo} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="app-header navbar-collapse-custom">
          <Nav pullRight className="nav-custom">
            <NavItem eventKey={1} href="#" >
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Football
            </NavItem>
            <NavItem eventKey={2} href="#">
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

class MatchTable extends Component {
  render() {
    const matches = renderMatches();

    return (
        <div class ="container">
          <div class="selection-menu" >
            <div className="selection-item selection-item-select">
              <a href="#">Results</a>
            </div>
            <div className="selection-item">
              <a href="#">Upcoming games</a>
            </div>
            <div className="selection-item">
              <a href="#">Tables</a>
            </div>
          </div>
          <div className="match-container">
            { matches }
            <div className="center-hz">
              <Button>Show more</Button>
            </div>
          </div>
        </div>
    );
  }
}

class MatchRow extends Component {
  render() {
    return (
        <Row className="match-cell">
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
        </Row>
    );
  }
}

export default App;
