import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {importAll} from '../HelperFunctions.js'

class ResultSmall extends Component{



  render(){
      console.log(this.props.match)
      const images = importAll(require.context('../img/flags', false, /\.(png)$/));
      var link_t1 = "/team/"+ this.props.match.team1;
      var link_t2 = "/team/"+ this.props.match.team2;

    return(
      <Row className="result-small-container">
        <Col sm={4}><a href={link_t1}><img src={images[this.props.match.team1+".png"]} alt={''} height={12} /> <br />{this.props.match.fullName1}</a></Col>
        <Col sm={1}>3</Col>
        <Col sm={2}>-</Col>
        <Col sm={1}>2</Col>
        <Col sm={4}><a href={link_t2}><img src={images[this.props.match.team2+".png"]} alt={''} height={12} /> <br />{this.props.match.fullName2}</a></Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultSmall)
