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
    </div>
  );
};

export default Search;
