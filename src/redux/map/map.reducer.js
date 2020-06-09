import mapActionTypes from './map.types';

const INITIAL_STATE = {
  location: {
    latitude: 23.810331,
    longitude: 90.412521,
  },
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mapActionTypes.SET_MARKER:
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};

export default mapReducer;
