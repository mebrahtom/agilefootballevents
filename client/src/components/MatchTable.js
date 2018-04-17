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
  }

  render(){
    const gmatches = renderMatchRows();
    return(
      <div className="match-container">
        {gmatches}
        <div className="center-hz">
          <Button>Show more</Button>
        </div>
      </div>
    );
  }
}

function renderMatchRows(){
  var matches = [];

  for(var i = 0; i < 10; i++ ){
    matches.push(<MatchRow key ={i} date="2018-03-11"/>);
  }

  return matches;
}

class MatchRow extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <Row className="match-cell" onClick={() => this.setState({ open: !this.state.open })}>
        <Col sm={2}>
          {this.props.date}
        </Col>
        <Col sm={3}>
          Team 1
        </Col>
        <Col sm={2}>
          x - x
        </Col>
        <Col sm={3}>
          Team 2
        </Col>
        <Col sm={2}>
          Location
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
    matches: state.matches
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchTable)
