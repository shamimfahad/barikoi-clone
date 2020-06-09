import mapActionTypes from './map.types';

export const setMarker = (location) => ({
  type: mapActionTypes.SET_MARKER,
  payload: location,
});
