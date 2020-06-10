import mapActionTypes from './map.types';

export const setMarker = (location) => ({
  type: mapActionTypes.SET_MARKER,
  payload: location,
});

export const showDetails = () => ({
  type: mapActionTypes.SHOW_DETAILS,
});

export const hideDetails = () => ({
  type: mapActionTypes.HIDE_DETAILS,
});
