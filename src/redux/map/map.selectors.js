import { createSelector } from 'reselect';

const selectMap = (state) => state.map;

export const selectLocation = createSelector(
  [selectMap],
  (map) => map.location
);

export const selectDetails = createSelector(
  [selectMap],
  (map) => map.showDetails
);
