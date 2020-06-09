import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSuggestions } from '../../redux/suggestion/suggestion.selectors';
import {
  fetchSuggestionsStart,
  clearSuggestion,
} from '../../redux/suggestion/suggestion.actions';

import Suggestion from '../suggestion/suggestion.component';
import PlaceDetails from '../place-details/place-details.component';

import './search.styles.scss';

const Search = ({ fetchSuggestionsStart, suggestions, clearSuggestion }) => {
  const [searchString, setSearchString] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [place, setPlace] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setSearchString(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchSuggestionsStart(searchString);
  };

  const updateInput = (location) => {
    const { area, city } = location;
    const address = `${area}, ${city}`;
    setInputValue(address);
    setPlace(true);
    clearSuggestion();
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
          value={inputValue}
        />
      </form>
      <div className="suggestion-box">
        {suggestions
          ? suggestions.map(({ id, ...otherSuggestionProps }) => (
              <Suggestion
                key={id}
                id={id}
                {...otherSuggestionProps}
                updateInput={updateInput}
              />
            ))
          : ''}
      </div>
      <div className="details-box">{place ? <PlaceDetails /> : ''}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  suggestions: selectSuggestions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSuggestionsStart: (searchString) =>
    dispatch(fetchSuggestionsStart(searchString)),
  clearSuggestion: () => dispatch(clearSuggestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
