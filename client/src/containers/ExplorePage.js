import React, { Component } from 'react';
import SimpleMap from '../components/Map.js';
import {Button, Row, Grid, FormGroup, Checkbox, ControlLabel, Col, FormControl, ButtonGroup} from 'react-bootstrap';
import {importAll} from '../HelperFunctions.js'

class ExplorePage extends Component {
  render() {
    const images = importAll(require.context('../img/icons', false, /\.(png)$/));
    return (
      <Grid fluid >
        <Col xs={9} md={9} lg={9}>
          {<SimpleMap/>}
        </Col>
        <Col xs={3} md={3} lg={3}>
          <Row bsClass="mapRow">
          <FormControl type="text" placeholder="Search"/>
          </Row>

            <Row bsClass="mapRow">
            <h4>Show Me:</h4>
            <ButtonGroup block vertical>
            <Button><img alt="Stadium" src={images["football.png"]} width={20} height={20}/> Stadiums</Button>
            <Button><img alt="Cafes" src={images["cafe.png"]} width={20} height={20}/> Cafes &amp; Bars</Button>
            <Button><img alt="Restaurants" src={images["restaurant.png"]} width={20} height={20}/> Restaurants</Button>
            <Button><img alt="Attractions" src={images["attractions.png"]} width={20} height={20}/> Attractions </Button>
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

function markerInfo(){
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
