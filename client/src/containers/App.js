import React, { Component } from 'react';
import logo from '../img/logo.png';
import './App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux'
import HomePage from "../containers/HomePage.js"
import FootballPage from "../containers/FootballPage.js"
import ExplorePage from "../containers/ExplorePage.js"
import LoginPage from "../containers/LoginPage.js"
import store from '../store'
import AdminPage from "../containers/AdminPage.js"

class App extends Component {
  render() {
    const home_page = () => (<HomePage/>);
    const football_page = () => (<FootballPage/>);
    const explore_page = () => (<ExplorePage/>);
    const login_page = () => (<LoginPage/>);
    const admin_page = () => (<AdminPage/>);

    return (
      <Provider store={store}>
        <Router>
        <div className="app">
          <Header/>
          <Route exact path="/" component={home_page} />
          <Route path="/football" component={football_page} />
          <Route path="/explore" component={explore_page} />
          <Route path="/login" component={login_page} />
          <Route path="/admin" component={admin_page} />            
        </div>
      </Router>
    </Provider>
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

export default App;
