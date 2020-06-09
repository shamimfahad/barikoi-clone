import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSuggestions } from '../../redux/suggestion/suggestion.selectors';
import { fetchSuggestionsStart } from '../../redux/suggestion/suggestion.actions';

import Suggestion from '../suggestion/suggestion.component';

import './search.styles.scss';

const Search = ({ fetchSuggestionsStart, suggestions }) => {
  const [searchString, setSearchString] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchSuggestionsStart(searchString);
  };
  return (
    <div className="search-container">
      <h1>
        Bari<span style={{ color: '#4CDFB5' }}>Koi</span>{' '}
        <span style={{ color: '#4CDFB5' }}>Clone</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          id="search"
          name="search"
          onChange={handleChange}
        />
      </form>
      <div className="suggestion-box">
        {suggestions
          ? suggestions.map(({ id, ...otherSuggestionProps }) => (
              <Suggestion key={id} sid={id} {...otherSuggestionProps} />
            ))
          : ''}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  suggestions: selectSuggestions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSuggestionsStart: (searchString) =>
    dispatch(fetchSuggestionsStart(searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
