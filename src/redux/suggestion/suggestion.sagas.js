import { takeLatest, call, put, all } from 'redux-saga/effects';

import suggestionActionTypes from './suggestion.types';

import { getSuggestions } from '../../api/Barikoi';
import {
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
} from './suggestion.actions';

export function* fetchSuggestionsAsync({ payload }) {
  try {
    const places = yield call(getSuggestions, payload);
    yield put(fetchSuggestionsSuccess(places));
  } catch (error) {
    yield put(fetchSuggestionsFailure(error.message));
  }
}

export function* fetchSuggestionsStart() {
  yield takeLatest(
    suggestionActionTypes.FETCH_SUGGESTION_START,
    fetchSuggestionsAsync
  );
}

export function* suggestionSagas() {
  yield all([call(fetchSuggestionsStart)]);
}
