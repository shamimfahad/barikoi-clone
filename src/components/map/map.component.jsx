import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { revGeocoding } from '../../api/Barikoi';

import { selectLocation } from '../../redux/map/map.selectors';
import { setMarker } from '../../redux/map/map.actions';
import { clearSuggestion } from '../../redux/suggestion/suggestion.actions';

import './map.styles.scss';

const MainMap = (props) => {
  const { setMarker, clearSuggestion } = props;
  const mapClicked = async (mapProps, map, e) => {
    clearSuggestion();

    const latLng = {
      lat: e.latLng.lat().toFixed(4),
      lng: e.latLng.lng().toFixed(4),
    };

    const place = await revGeocoding(latLng);
    await setMarker(place);
  };

  const {
    location: { latitude, longitude },
  } = props;
  const mapStyles = {
    width: '50vw',
    height: '100%',
  };

  return (
    <div className="map-container">
      <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: latitude, lng: longitude }}
        center={{ lat: latitude, lng: longitude }}
        onClick={mapClicked}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  location: selectLocation,
});

const mapDispatchToProps = (dispatch) => ({
  setMarker: (location) => dispatch(setMarker(location)),
  clearSuggestion: () => dispatch(clearSuggestion()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyAzMOYlCwHnPE4uBTLsMNPxnbv7EKhD8DA',
  })(MainMap)
);
