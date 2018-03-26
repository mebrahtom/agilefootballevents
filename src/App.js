import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Final from './Final';
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
       <Header />
        <Body />
         <Final />
      </div>
    );
  }
}

export default App;
