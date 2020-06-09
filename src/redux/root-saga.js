import { all, call } from 'redux-saga/effects';

import { suggestionSagas } from './suggestion/suggestion.sagas';

export default function* rootSaga() {
  yield all([call(suggestionSagas)]);
}
