import suggestionActionTypes from './suggestion.types';

export const fetchSuggestionsStart = (searchString) => ({
  type: suggestionActionTypes.FETCH_SUGGESTION_START,
  payload: searchString,
});

export const fetchSuggestionsSuccess = (suggestions) => ({
  type: suggestionActionTypes.FETCH_SUGGESTION_SUCCESS,
  payload: suggestions,
});

export const fetchSuggestionsFailure = (errorMessage) => ({
  type: suggestionActionTypes.FETCH_SUGGESTION_FAILURE,
  payload: errorMessage,
});
