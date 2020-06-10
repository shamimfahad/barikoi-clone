import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSuggestions } from '../../redux/suggestion/suggestion.selectors';
import { selectDetails } from '../../redux/map/map.selectors';
import {
  fetchSuggestionsStart,
  clearSuggestion,
} from '../../redux/suggestion/suggestion.actions';

import { showDetails, hideDetails } from '../../redux/map/map.actions';

import Suggestion from '../suggestion/suggestion.component';
import PlaceDetails from '../place-details/place-details.component';

import './search.styles.scss';

const Search = ({
  fetchSuggestionsStart,
  suggestions,
  clearSuggestion,
  showDetails,
  hideDetails,
  selectDetails,
}) => {
  const [searchString, setSearchString] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    setSearchString(e.target.value);

    if (e.target.value === '') {
      clearSuggestion();
    }
    hideDetails();
    setTimeout(() => {
      fetchSuggestionsStart(searchString);
    }, 300);
  };

  const updateInput = (location) => {
    const { area, city } = location;
    const address = `${area}, ${city}`;
    setInputValue(address);
    showDetails();
    clearSuggestion();
  };

  return (
    <div className="search-container">
      <h1 onClick={() => (window.location.href = '/')}>
        Bari<span style={{ color: '#4CDFB5' }}>Koi</span>{' '}
        <span style={{ color: '#4CDFB5' }}>Clone</span>
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          id="search"
          name="search"
          autoComplete="off"
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
          : null}
      </div>
      <div className="details-box">
        {selectDetails ? <PlaceDetails /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  suggestions: selectSuggestions,
  selectDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSuggestionsStart: (searchString) =>
    dispatch(fetchSuggestionsStart(searchString)),
  clearSuggestion: () => dispatch(clearSuggestion()),
  showDetails: () => dispatch(showDetails()),
  hideDetails: () => dispatch(hideDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
