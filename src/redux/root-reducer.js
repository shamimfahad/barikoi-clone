import { combineReducers } from 'redux';

import suggestionReducer from './suggestion/suggestion.reducer';
import mapReducer from './map/map.reducer';

export default combineReducers({
  suggestion: suggestionReducer,
  map: mapReducer,
});
