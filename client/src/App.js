import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <header className="app-header">



        </header>

      </div>
    );
  }
}

class TableView extends Component {
  render() {
    return (

        <div class ="container">
          <h1 className="App-title">Football</h1>
        </div>

    );
  }


}

export default App;
