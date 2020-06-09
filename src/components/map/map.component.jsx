import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { selectLocation } from '../../redux/map/map.selectors';

import './map.styles.scss';

class MainMap extends React.Component {
  render() {
    const {
      location: { latitude, longitude },
    } = this.props;
    const mapStyles = {
      width: '50vw',
      height: '100%',
    };

    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  location: selectLocation,
});

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyAzMOYlCwHnPE4uBTLsMNPxnbv7EKhD8DA',
  })(MainMap)
);
