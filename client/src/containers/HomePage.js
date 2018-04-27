import React, { Component } from 'react';
import background from '../img/homepageBackground.jpg';
class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <img className="homepage-background" src={background} alt="" />
      </div>
    );
  }
}

export default HomePage;
