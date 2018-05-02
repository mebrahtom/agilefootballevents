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
<<<<<<< HEAD


        <img className="homepage-background" src={background} alt="" />
=======
        <Row>
          <Col md={8}>
            <img className="homepage-background" src={background} alt="" />
          </Col>
          <Col md={4}>
            <Calendar onChange={this.onChange} value={this.state.date} tileContent={({ date, view }) => markDays(view, date) } hover={() => console.log('hover')}/>
          </Col>
        </Row>

>>>>>>> ed8fd980017b3b2b3818a33b181ae57f19caa5a9
      </div>
    );
  }
}

function markDays(view, date){

  console.log(view, date);
  if(view === 'month' && date.getDay() === 0){
    console.log('return element');
    return <div className="react-calendar-custom-dot"></div>

  }
  return null;

}

export default HomePage;
