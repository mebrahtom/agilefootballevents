import React, { Component } from 'react';
import { Button, Row, Col, Panel} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'

class MatchTable extends Component{

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllUpcomingMatches().then(() => {
      //console.log(this.props.upcomingmatches)
    })
  }

  render(){
    const gmatches = renderMatchRows(this.props.upcomingmatches);
    return(
      <div className="match-container">
        {gmatches}
        <div className="center-hz">
          <Button>Show More</Button>
        </div>
      </div>
    );
  }
}

function renderMatchRows(upcomingmatches){
  var matches = [];

  for(var i = 0; i < upcomingmatches.length; i++ ){
  /* Push the data from database to the MatchRow and create rows*/
    matches.push(<MatchRow key ={i}
      date={upcomingmatches[i].playingDate}
      time={upcomingmatches[i].PlayingTime}
      t1={upcomingmatches[i].team1}
      t2={upcomingmatches[i].team2}
      loc={upcomingmatches[i].stadium}/>);
  }

  return matches;
}

/* Importing all images */


class MatchRow extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }



  render() {

    const images = importAll(require.context('../img/flags', false, /\.(png)$/));

    const link_team1 = "/team/" + this.props.t1;
    const link_team2 = "/team/" + this.props.t2;

    return (

      <Row className="match-cell" onClick={() => this.setState({ open: !this.state.open })}>
        <Col sm={4}>
          <br />
          {this.props.date}
          <br />
          {this.props.time}
        </Col>
        <Col sm={2}>
          <a href={link_team1}>
            <img src={images[this.props.t1+'.png']} alt={''} width={35} height={25}/>
            <br />
            <div className="ccodetext" >{this.props.t1}</div>
          </a>
        </Col>
        <Col sm={2}>
          <a href={link_team2}>
            <img src={images[this.props.t2+'.png']} alt={''} width={35} height={25}/>
            <br />
            <div className="ccodetext" >{this.props.t2}</div>
          </a>
        </Col>
        <Col sm={4}>
          <br />
          {this.props.loc}
        </Col>
        {/* Collapse Div*/}
        <Panel id="collapseable-panel" expanded={this.state.open} >
          <Panel.Collapse>
            <Panel.Body>
              Information about the game....
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </Row>

    );
  }
}

function mapStateToProps(state) {
  return {
    upcomingmatches: state.upcomingmatches
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchTable)
