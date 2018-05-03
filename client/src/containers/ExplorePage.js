import React, { Component } from 'react';
import ExploreMap from '../components/Map.js';
import {Button, Row, Grid, FormGroup, Checkbox, ControlLabel, Col, FormControl, ButtonGroup} from 'react-bootstrap';
import {importAll} from '../HelperFunctions.js'

class ExplorePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapType: ''
    }
  }
  filterMap(type) {
    this.setState({ mapType: type })
  }
  render() {
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
            <Button onClick={() => this.filterMap('Arenas')}><img alt="Stadium" src={images["football.png"]} width={20} height={20} /> Stadiums</Button>
            <Button onClick={() => this.filterMap('Cafes')}><img alt="Cafes" src={images["cafe.png"]} width={20} height={20}/> Cafes &amp; Bars</Button>
            <Button onClick={() => this.filterMap('Restaurants')}><img alt="Restaurants" src={images["restaurant.png"]} width={20} height={20}/> Restaurants</Button>
            <Button onClick={() => this.filterMap('Attractions')}><img alt="Attractions" src={images["attractions.png"]} width={20} height={20}/> Attractions </Button>
            </ButtonGroup>
            </Row>
          <Row bsClass="mapRow">
            <h4>Information:</h4>
            {markerInfo()}
            </Row>
        </Col>
      </Grid>
    );
  }
}

function markerInfo() {
  var info = [];
  for (var i = 1; i < 5; i++){
    info.push(
      <Row bsClass="infoBox"> Marker {i} </Row>);
  }
  return info;
}



function renderMap(){

  
}

export default ExplorePage;
