import React from 'react';

import './suggestion.styles.scss';

const Suggestion = ({ area, city, address }) => {
  return (
    <div className="suggestion">
      <i className="fas fa-map-marker-alt fa-2x"></i>
      <div className="address">
        <h3 className="location-title">{`${area}, ${city}`}</h3>
        <p className="location-desc">{address}</p>
      </div>
    </div>
  );
};

export default Suggestion;
