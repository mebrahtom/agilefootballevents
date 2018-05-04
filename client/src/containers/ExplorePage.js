import React, { Component } from 'react';
import ExploreMap from '../components/Map.js';
import {Button, Row, Grid, Col, FormControl, ButtonGroup} from 'react-bootstrap';
import {importAll} from '../HelperFunctions.js'
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ExplorePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapType: ''
    }
  }

  componentDidMount() {
    this.props.getLocations()
  }

  filterMap(type) {
    this.setState({ mapType: type })
  }

  render() {
    console.log(this.state.mapType)
    const images = importAll(require.context('../img/icons', false, /\.(png)$/));
    return (
      <Grid fluid >
        <Col xs={9} md={9} lg={9}>
          {<ExploreMap mapType={this.state.mapType}/>}
        </Col>
        <Col xs={3} md={3} lg={3}>
          <Row bsClass="mapRow">
          <FormControl type="text" placeholder="Search"/>
          </Row>
            <Row bsClass="mapRow">
            <h4>Show Me:</h4>
            <ButtonGroup block vertical>
            <Button onClick={() => this.filterMap('Arena')}><img alt="Stadium" src={images["football.png"]} width={20} height={20} /> Stadiums</Button>
            <Button onClick={() => this.filterMap('Cafe')}><img alt="Cafes" src={images["cafe.png"]} width={20} height={20}/> Cafes &amp; Bars</Button>
            <Button onClick={() => this.filterMap('Restaurant')}><img alt="Restaurants" src={images["restaurant.png"]} width={20} height={20}/> Restaurants</Button>
            <Button onClick={() => this.filterMap('Attraction')}><img alt="Attractions" src={images["attractions.png"]} width={20} height={20}/> Attractions </Button>
            </ButtonGroup>
            </Row>
          <Row bsClass="mapRow">
            <h4>Information:</h4>
            {markerInfo(this.props.locations, this.state.mapType)}
            </Row>
        </Col>
      </Grid>
    );
  }
}

function markerInfo(locations, type) {
  var info = [];
  locations.forEach(element => {
    if (element.locationType === type) {
      info.push( <Row bsClass="infoBox"> {element.locationName} </Row> )
    }
  })
  return info;
}

function mapStateToProps(state) {
  return {
    locations: state.locations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage)
