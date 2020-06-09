import { createSelector } from 'reselect';

const selectSuggestion = (state) => state.suggestion;

export const selectSuggestions = createSelector(
  [selectSuggestion],
  (suggestion) => suggestion.suggestions
);

export const selectSearchString = createSelector(
  [selectSuggestion],
  (suggestion) => suggestion.searchString
);
