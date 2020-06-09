import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectLocation } from '../../redux/map/map.selectors';

import './place-details.styles.scss';

const PlaceDetails = ({ location }) => {
  const { id, area, city, address, pType } = location;
  return (
    <div className="place-details">
      <div className="content">
        <h3>{`${area}, ${city}`}</h3>
        <h5>{`${address}`} </h5>
        <p>Place Code: {id}</p>
        <p>{pType}</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  location: selectLocation,
});

export default connect(mapStateToProps)(PlaceDetails);
