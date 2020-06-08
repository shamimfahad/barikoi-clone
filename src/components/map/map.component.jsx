import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './map.styles.scss';

class MainMap extends React.Component {
  render() {
    const mapStyles = {
      width: '50vw',
      height: '100%',
    };
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 23.810331, lng: 90.412521 }}
        >
          <Marker position={{ lat: 23.810331, lng: 90.412521 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAzMOYlCwHnPE4uBTLsMNPxnbv7EKhD8DA',
})(MainMap);
