import suggestionActionTypes from './suggestion.types';

const INITIAL_STATE = {
  searchString: '',
  suggestions: null,
  errorMessage: undefined,
};

const suggestionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case suggestionActionTypes.FETCH_SUGGESTION_START:
      return {
        ...state,
        searchString: action.payload,
      };
    case suggestionActionTypes.FETCH_SUGGESTION_SUCCESS:
      return {
        ...state,
        suggestions: action.payload,
      };
    case suggestionActionTypes.FETCH_SUGGESTION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case suggestionActionTypes.CLEAR_SUGGESTION:
      return {
        ...state,
        suggestions: [],
      };
    default:
      return state;
  }
};

export default suggestionReducer;
