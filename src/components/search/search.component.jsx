import React from 'react';

import './search.styles.scss';

const Search = () => {
  return (
    <div className="search-container">
      <h1>
        Bari<span style={{ color: '#4CDFB5' }}>Koi</span>{' '}
        <span style={{ color: '#4CDFB5' }}>Clone</span>
      </h1>
      <form>
        <input type="text" placeholder="Search" id="search" name="search" />
      </form>
      <div className="suggestion-box">
        <div className="suggestion">
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <div className="address">
            <h3 className="location-title">Place Name</h3>
            <p className="location-desc">Full Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
