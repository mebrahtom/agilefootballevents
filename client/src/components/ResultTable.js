import React, { Component } from 'react';
import { Button, Row, Col, Panel} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
  {/* Push the data from database to the MatchRow and create rows*/}
    matches.push(<ResultRow key ={i} 
      t1={resultmatches[i].team1} 
      t2={resultmatches[i].team2}
      result1={resultmatches[i].goals1}
      result2={resultmatches[i].goals2}/>);
  }

  return matches;
}

{/* Importing all images */}
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
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
        <Col sm={5}>
          <img src={images[this.props.t1+'.png']} width={35} height={25}/>
          <br />
          <div className="ccodetext" >{this.props.t1}</div>
        </Col>
        <Col sm={2}>
          <br />
          {this.props.result1} - {this.props.result2}
        </Col>
        <Col sm={5}>
          <img src={images[this.props.t2+'.png']} width={35} height={25}/>
          <br />
          <div className="ccodetext" >{this.props.t2}</div>
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
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable)
