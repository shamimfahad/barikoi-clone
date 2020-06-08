import React, { Component } from 'react';

import './homepage.styles.scss';

import Search from '../components/search/search.component';
import MainMap from '../components/map/map.component';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <Search />
        <MainMap />
      </div>
    );
  }
}

export default Homepage;
