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
      this.props.upcomingmatches.map((element) =>
        this.state.days_to_mark.push({played:false, date:new Date (element.playingDate)})
      );
    })
    this.props.getAllUpcomingMatches().then(() => {
      //console.log(this.props.upcomingmatches)
    })
    this.props.getAllMatches().then(() => {
      this.props.matches.map((element) =>
        this.state.days_to_mark.push({played:true, date:new Date (element.playingDate)})
      );
    })
  }

  state = {
     date: new Date(),
     days_to_mark: []
   }

  onChange = date => this.setState({ date })

  onClickDay = date => {
    this.props.history.push('/football');
  }

  render() {
    return (

      <div className="homepage-container">

        <Row className="vertical-spacing">
          <Col mdOffset={2} md={8}>
            <img className="homepage-background" src={background} alt="" />
          </Col>
          <Col md={2}>
            <Calendar onClickDay={this.onClickDay} onChange={this.onChange} value={this.state.date} tileContent={({ date, view }) => markDays(view, date, this.state.days_to_mark) } hover={() => console.log('hover')}/>
          </Col>
        </Row>
      </div>
    );
  }
}

function markDays(view, date, days_to_mark){

// Bad coding, should be done in an another way. Will fix later /Emil

  var mark_day = {
    mark:false,
    played:false
  };
  days_to_mark.forEach((element) => {

    if(element.date.getFullYear() === date.getFullYear() &&
    element.date.getMonth() === date.getMonth() &&
    element.date.getDate() === date.getDate()){
      mark_day =  {
        mark: true,
        played: element.played
      }
    }


  });


  if(view === 'month' && mark_day.mark){
    if(mark_day.played){
      return <div className="react-calendar-custom-dot-green"></div>
    }
    return <div className="react-calendar-custom-dot-blue"></div>
  }

  return null;

}

function mapStateToProps(state) {
  return {
    matches: state.matches,
    upcomingmatches: state.upcomingmatches
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
//export default HomePage;
