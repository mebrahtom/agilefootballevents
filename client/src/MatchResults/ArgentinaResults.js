import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'
class ArgentinaResults extends Component{

  /* Fetching database information through actionCreators.js */
  componentDidMount() {
    this.props.getAllMatches()
  }

  render(){
    const gmatches = renderMatchRows(this.props.matches);
    return(
      <div className="match-container">
        {gmatches}
      </div>
    );
  }
}

function renderMatchRows(resultmatches){
  var matches = [];

  for(var i = 0; i < resultmatches.length; i++ ){
  /* Push the data from database to the MatchRow and create rows*/
  if(resultmatches[i].team1==='ARG' ||resultmatches[i].team2==='ARG'){
    matches.push(<ResultRow key ={i}
      date={resultmatches[i].playingDate}
      time={resultmatches[i].playingTime}
      abb1={resultmatches[i].abbreviation1}
      t1={resultmatches[i].team1}
      abb2={resultmatches[i].abbreviation2}
      t2={resultmatches[i].team2}
      result1={resultmatches[i].goals1}
      result2={resultmatches[i].goals2}
      loc={resultmatches[i].stadium}/>
    );
  }
  }

  return matches;
}


class ResultRow extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {

    const images = importAll(require.context('../img/flags', false, /\.(png)$/));

    return (

      <Row className="match-cell" onClick={() => this.setState({ open: !this.state.open })}>
        <Col sm={2}>
            {this.props.date}
            <br/>
            {this.props.time}
          </Col>
          <Col sm={2}>
          <img src={images[this.props.t1+'.png']} alt={''} width={35} height={25}/>
          <br />
         {this.props.t1}
        </Col>
        <Col sm={2}>
          <br />
          {this.props.result1} - {this.props.result2}
        </Col>
        <Col sm={2}>
          <img src={images[this.props.t2+'.png']} alt={''} width={35} height={25}/>
          <br />
          <div className="ccodetext" >{this.props.t2}</div>
        </Col>
          <Col sm={2}>
        <div className="ccodetext" >{this.props.loc}</div>
          </Col>
        {/* Collapse Div*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(ArgentinaResults)
