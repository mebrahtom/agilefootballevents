import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import background from '../img/homepageBackground.jpg';
import Calendar from 'react-calendar';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class HomePage extends Component {
  componentDidMount() {
    this.props.getAllUpcomingMatches().then(() => {
      //console.log(this.props.upcomingmatches)
      this.props.upcomingmatches.map((element) =>


        this.state.days_to_mark.push(new Date (element.playingDate))

      );

    })
    console.log(this.props.upcomingmatches);
    console.log(this.state.days_to_mark);
  }

  state = {
     date: new Date(),
     days_to_mark: []
   }

  onChange = date => this.setState({ date })



  render() {
    console.log(this.props.upcomingmatches);
    return (

      <div className="homepage-container">
        <Row>
          <Col md={8}>
            <img className="homepage-background" src={background} alt="" />
          </Col>
          <Col md={4}>
            <Calendar onChange={this.onChange} value={this.state.date} tileContent={({ date, view }) => markDays(view, date, this.state.days_to_mark) } hover={() => console.log('hover')}/>
          </Col>
        </Row>
      </div>
    );
  }
}

function markDays(view, date, days_to_mark){
console.log('days_to_mark', days_to_mark, date);

  var mark_day = days_to_mark.some((element) => {

    return element.getFullYear() === date.getFullYear() &&
      element.getMonth() === date.getMonth() &&
      element.getDate() === date.getDate()
  });

  if(view === 'month' && mark_day){
    return <div className="react-calendar-custom-dot"></div>
  }

  return null;

}

function mapStateToProps(state) {
  return {
    upcomingmatches: state.upcomingmatches
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
//export default HomePage;
