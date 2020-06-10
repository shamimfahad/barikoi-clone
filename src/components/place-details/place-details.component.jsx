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
        <div>{`${area}, ${city}`}</div>
        <div>{`${address}`} </div>
        <p className="p-code">Place Code: {id}</p>
        {pType ? <p className="p-type">{pType}</p> : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  location: selectLocation,
});

export default connect(mapStateToProps)(PlaceDetails);
