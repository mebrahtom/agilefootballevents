import React, { PureComponent } from 'react';
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import {importAll} from '../HelperFunctions.js'

class ExploreMap extends PureComponent {
  
  /*constructor(props) {
    super(props)
    this.state = {
      isMarkerShown: true
    }
  }*/
  
  currentMarker(coords){
    const images = importAll(require.context('../img/icons', false, /\.(png)$/));
    if(coords.set){
    return <Marker name="Current Position" position={{lat: coords.lat, lng: coords.lng}}
             icon = {images['currentPosition.png']}>
          </Marker>
    }
  }

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
            <div><h3 align='center'>{this.props.locName}</h3>
                 <p align='center'>{this.props.locInfo}</p>
            </div>
          </InfoWindow>
        </Marker>    
      )
    }
    return markers 
  }
  

  /*componentDidMount() {
    //this.delayedShowMarker()
  }

  delayedShowMarker = () => {
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
        defaultCenter={{ lat: this.props.currentLocation.lat, lng: this.props.currentLocation.lng }} 
      >
        {this.currentMarker(this.props.currentLocation)}
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

export default ExploreMap
