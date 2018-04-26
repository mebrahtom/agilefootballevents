import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 57.7089,
      lng: 11.9746
    },
    zoom: 13
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDgDe9NgUX5v-I8MQ2IM0YkERnKEgnc_NM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;