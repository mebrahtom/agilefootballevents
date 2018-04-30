import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import background from '../img/homepageBackground.jpg';
import Calendar from 'react-calendar';
class HomePage extends Component {

  state = {
     date: new Date(),
   }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="homepage-container">
        <Row>
          <Col md={8}>
            <img className="homepage-background" src={background} alt="" />
          </Col>
          <Col md={4}>
            <Calendar onChange={this.onChange} value={this.state.date} tileContent={({ date, view }) => view === 'month' && date.getDay() === 0 ? <div className="react-calendar-custom-dot"></div> : null} hover={() => console.log('hover')}/>
          </Col>
        </Row>

      </div>
    );
  }
}

export default HomePage;
