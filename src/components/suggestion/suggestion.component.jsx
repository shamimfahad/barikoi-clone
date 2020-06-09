import React from 'react';
import { connect } from 'react-redux';

import { setMarker } from '../../redux/map/map.actions';

import './suggestion.styles.scss';

const Suggestion = (props) => {
  const { id, area, city, address, latitude, longitude, pType } = props;
  const location = {
    id,
    area,
    city,
    address,
    latitude,
    longitude,
    pType,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    props.setMarker(location);
    props.updateInput(location);
  };

  return (
    <div className="suggestion" onClick={handleClick}>
      <i className="fas fa-map-marker-alt fa-2x"></i>
      <div className="address">
        <h3 className="location-title">{`${area}, ${city}`}</h3>
        <p className="location-desc">{address}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setMarker: (location) => dispatch(setMarker(location)),
});

export default connect(null, mapDispatchToProps)(Suggestion);
