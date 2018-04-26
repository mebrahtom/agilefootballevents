import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'

class RussiaFixtures extends Component{
  /* Fetching database information through actionCreators.js */
  constructor(props){
    super(props);

    this.state = {};
  }
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
      </div>
    );
  }
}
function renderMatchRows(upcomingmatches){
  var matches = [];
  for(var i = 0; i < upcomingmatches.length; i++ ){
    if(upcomingmatches[i].team1==='RUS' ||upcomingmatches[i].team2==='RUS'){
      matches.push(<MatchRow key ={i}
      date={upcomingmatches[i].playingDate}
      time={upcomingmatches[i].playingTime}
      group={upcomingmatches[i].groupName}
      abb1={upcomingmatches[i].abbreviation1}
      t1={upcomingmatches[i].team1}
      se={upcomingmatches[i].terminator}
      abb2={upcomingmatches[i].abbreviation2}
      t2={upcomingmatches[i].team2}
      loc={upcomingmatches[i].stadium}/>);
    }
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
    return (
      <Row className="match-cell" onClick={() => this.setState({ open: !this.state.open })}>
        <Col sm={2}>
            {this.props.date}
            <br/>
              {this.props.time}
            </Col>
        <Col sm={2}>
          {this.props.group}
        </Col>
        <Col sm={2}>

          <img src={images[this.props.t1+'.png']} alt={''} width={35} height={25}/>
          <br />
          <div className="ccodetext" >{this.props.t1}</div>

        </Col>
        <Col sm={2}>
          {this.props.se}
        </Col>
        <Col sm={2}>
           <img src={images[this.props.t2+'.png']} alt={''} width={35} height={25}/>
           <br />
           <div className="ccodetext" >{this.props.t2}</div>

        </Col>
        <Col sm={2}>
          {this.props.loc}
        </Col>
        {/* Collapse Div*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(RussiaFixtures)
