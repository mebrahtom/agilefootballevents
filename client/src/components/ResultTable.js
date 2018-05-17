import React, { Component } from 'react';
import { Button, Row, Col} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'
import Moment from 'react-moment';

class ResultTable extends Component{

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllMatches()
  }

  render(){
    const gmatches = renderMatchRows(this.props.matches);
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

function renderMatchRows(resultmatches){
  var matches = [];

  for(var i = 0; i < resultmatches.length; i++ ){
  /* Push the data from database to the MatchRow and create rows*/
    matches.push(<ResultRow key ={i}
      date={resultmatches[i].playingDate + ' ' + resultmatches[i].playingTime}
      t1={resultmatches[i].team1}
      t2={resultmatches[i].team2}
      fn1={resultmatches[i].fullName1}
      fn2={resultmatches[i].fullName2}
      result1={resultmatches[i].goals1}
      result2={resultmatches[i].goals2}
      loc={resultmatches[i].stadium}/>);
  }

  matches.sort(function(a, b) {
    const ad = new Date(a.props.date);
    const bd = new Date(b.props.date);
    return ad>bd ? -1 : ad<bd ? 1 : 0;
});

  return matches;
}
class ResultRow extends Component {

  render() {

    const images = importAll(require.context('../img/flags', false, /\.(png)$/));
    const arena = "/explore?locationName=" + this.props.loc;

    const link_team1 = "/team/" + this.props.t1;
    const link_team2 = "/team/" + this.props.t2;

    return (

      <Row className="match-cell">
        <Col sm={3}>
          <br/>
          <Moment parse="YYYY-MM-DD HH:mm" format="DD MMM HH:mm">{this.props.date}</Moment>
        </Col>
        <Col sm={2}>
          <a href={link_team1}>
            <img src={images[this.props.fn1+'.png']} alt={''} width={35} height={25}/>
            <br />
            <div className="ccodetext" >{this.props.fn1}</div>
          </a>
        </Col>
        <Col sm={2}>
          <br />
          {this.props.result1} - {this.props.result2}
        </Col>
        <Col sm={2}>
          <a href={link_team2}>
            <img src={images[this.props.fn2+'.png']} alt={''} width={35} height={25}/>
            <br />
            <div className="ccodetext" >{this.props.fn2}</div>
          </a>
        </Col>
        <Col sm={3}>
          <br />
          <a href={arena}>
            {this.props.loc}
          </a>
        </Col>
      </Row>

    );
  }
}

function mapStateToProps(state) {
  return {
    matches: state.matches,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable)
