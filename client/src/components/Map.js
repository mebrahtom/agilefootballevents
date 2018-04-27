import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const style = {
  width: '100%',
  height: '100vh', 
}

export class GoogleMap extends Component {

  componentDidMount() {
    this.props.getLocation("Arenas", 2).then((data) => {
    })
    this.props.getTableSize("Arenas").then((data) => {
    })
  }
  
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
  render() {
    console.log(test)
    return (
      <Map 
        google={this.props.google} 
        zoom={15}
        style={style} 
        initialCenter={{
          lat: 57.7059,
          lng: 11.9873
        }}
      >
        <Marker onClick={this.onMarkerClick} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h2>Ullevi</h2>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


function mapStateToProps(state) {
  return {
    location: state.location,
    tablesize: state.tablesize
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: ('AIzaSyB0zQvbfo-wBPQWPV_rBwUo3FRQI-O7aEY')
})(GoogleMap))
