import React, { Component } from 'react';
import { Button, Row, Col, Panel} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MatchTable extends Component{

  componentDidMount() {
    this.props.getAllMatches().then(() => {
     
      console.log(this.props.matches)
    })
    this.props.getAllUpcomingMatches().then(() => {
      console.log(this.props.upcomingmatches)
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
  {/* Push the data from database to the MatchRow and create rows*/}
    matches.push(<MatchRow key ={i} 
      date={upcomingmatches[i].playingDate + " " + upcomingmatches[i].PlayingTime} 
      t1={upcomingmatches[i].team1} 
      t2={upcomingmatches[i].team2} 
      loc={upcomingmatches[i].stadium}/>);
  }

  return matches;
}

{/* Importing all images */}
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

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
        </Col>
        <Col sm={3}>
          <img src={images[this.props.t1+'.png']} width={35} height={25}/>
          <br />
          <div className="ccodetext" >{this.props.t1}</div>
        </Col>
        <Col sm={2}>
          x - x
        </Col>
        <Col sm={3}>
          <img src={images[this.props.t2+'.png']} width={35} height={25}/>
          <br />
          <div className="ccodetext" >{this.props.t2}</div>
        </Col>
        <Col sm={2}>
          {this.props.loc}
        </Col>
        {/* Collapse Div*/}
        <Panel id="collapseable-panel" expanded={this.state.open}>
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
    matches: state.matches,
    upcomingmatches: state.upcomingmatches
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchTable)
