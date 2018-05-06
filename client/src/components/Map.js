import React, { PureComponent } from 'react';
import * as actionCreators from '../redux/actions/actionCreators'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

class ExploreMap extends PureComponent {
  
  /*constructor(props) {
    super(props)
    this.state = {
      isMarkerShown: true
    }
  }*/

  renderMarkers(locations) {  
    var markers = []
    if (this.props.whatToRender === 0) {
      locations.forEach(element => {
        if (element.locationType === this.props.mapType) {
          markers.push(
            <Marker position={{ lat: element.latitude, lng: element.longitude }} 
                    onClick={this.props.onToggleOpen}>
              <InfoWindow onCloseClick={this.props.onToggleOpen}>
                <div>{element.locationName}</div>
              </InfoWindow>
            </Marker>
          )
        }
      });
    }
    else {
      markers.push(
        <Marker position={{ lat: this.props.locLat, lng: this.props.locLng }} 
                onClick={this.props.onToggleOpen}>
          <InfoWindow onCloseClick={this.props.onToggleOpen}>
            <div>{this.props.locName}</div>
          </InfoWindow>
        </Marker>    
      )
    }
    return markers 
  }
  

  componentDidMount() {
    //this.delayedShowMarker()
    this.props.getLocations()
  }

  /*delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }*/

  render() {
    const Map = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `550px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 57.6959, lng: 11.9873 }} 
      >
        {this.renderMarkers(this.props.locations)}
      </GoogleMap>
    )
    return (
      <Map
        //isMarkerShown={this.state.isMarkerShown}
        //onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreMap)
