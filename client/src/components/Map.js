import React, { Component } from 'react';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

class ExploreMap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  renderMarkers(locations) {
    var markers = []
    locations.forEach(element => {
      markers.push(
        <Marker position={{ lat: element.latitude, lng: element.longitude }} onClick={this.props.onMarkerClick}>
          <InfoWindow onCloseClick={this.props.onToggleOpen}>
            <h3> {element.locationName} </h3>
          </InfoWindow>
        </Marker>
      )
    });
    return markers
  }

  componentDidMount() {
    this.delayedShowMarker()
    this.props.getLocation("Arenas").then((data) => {
    })
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    const Map = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `550px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 57.6959, lng: 11.9873 }}
      >
        {this.renderMarkers(this.props.location)}
      </GoogleMap>
    )
    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreMap)