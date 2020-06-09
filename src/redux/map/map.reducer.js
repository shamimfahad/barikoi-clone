import mapActionTypes from './map.types';

const INITIAL_STATE = {
  location: {
    lat: 23.810331,
    lng: 90.412521,
  },
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mapActionTypes.SET_MARKER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default mapReducer;
