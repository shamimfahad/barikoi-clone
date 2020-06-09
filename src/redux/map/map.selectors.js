import { createSelector } from 'reselect';

const selectMap = (state) => state.map;

export const selectLocation = createSelector(
  [selectMap],
  (map) => map.location
);
