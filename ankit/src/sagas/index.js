import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchData() {
  const json = yield fetch('https://api.covid19api.com/summary')
    .then(response => response.json(), ); 
  yield put({ type: "COUNTRY_DATA", json: json, });
}

function* daysData(payload) {
  const json_confirmed = yield fetch(`https://api.covid19api.com/country/${payload.country}/status/confirmed`)
    .then(response => response.json(), ); 
  const json_recovered = yield fetch(`https://api.covid19api.com/country/${payload.country}/status/recovered`)
    .then(response => response.json(), ); 
  const json_deaths = yield fetch(`https://api.covid19api.com/country/${payload.country}/status/deaths`)
    .then(response => response.json(), ); 
  yield put({ type: "DAYS_DATA", json_confirmed:json_confirmed, json_recovered:json_recovered, json_deaths:json_deaths});
}

function* actionWatcher() {
  yield takeLatest('GET_DATA', fetchData)
  yield takeLatest('GET_DAYS_DATA', daysData)
}
export default function* rootSaga() {
	yield all([
		actionWatcher(),
	]);
}