import React, { Component } from 'react'
import logo from '../img/logo.png'
import './App.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Provider } from 'react-redux'
import HomePage from "../containers/HomePage.js"
import FootballPage from "../containers/FootballPage.js"
import ExplorePage from "../containers/ExplorePage.js"
import AdminRegistrationForm from "../components/AdminRegistrationForm"
import store from '../store'
import AdminPage from "../containers/AdminPage.js"
import TeamPage from "../containers/TeamPage.js"
import PlayerPage from "../containers/PlayerPage.js"
import AdminLoginPage from "../containers/AdminLoginPage.js"

class App extends Component {
  render() {
    const football_page = () => (<FootballPage/>)
    const admin_page = () => (<AdminPage/>)
    const team_page = ({match}) => (<TeamPage teamAbr = {match.params.teamAbr}/>)
    const player_page = ({match}) => (<PlayerPage playerId = {match.params.id}/>)
    return (
      <Provider store={store}>
        <Router >
        <div className="app">
          <Header/>
          <Route exact path="/" component={HomePage} />
          <Route path="/football" component={football_page} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/admin" component={admin_page} />
          <Route path="/admin-register" component={AdminRegistrationForm} />
          <Route path="/login" component={AdminLoginPage} />
          <Route path='/team/:teamAbr' component={team_page} />
          <Route path='/player/:id' component={player_page} />
        </div>
      </Router>
    </Provider>
    )
  }
}

class Header extends Component {
  logOut(e){
    localStorage.removeItem('jwtToken');
  }
  render() {
    const logOutStyle={
      color:'#FFFFFF',
      fontWeight:'bold'
    };
    let logInStatus='';
    const token=localStorage.getItem('jwtToken');
    if(token==null){
      logInStatus='';
    }
    else{
      logInStatus='Logout';
    }
    return (
      <Navbar inverse collapseOnSelect className="navbar-custom">
        <Navbar.Header className="app-header">
          <Navbar.Brand>
            <a href="/" className="navbar-brand-custom"><img alt="" src={logo} /></a>
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
            <NavItem eventKey={3} href="/login">
              <span style={logOutStyle} onClick={this.logOut}>{logInStatus}</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default App;
