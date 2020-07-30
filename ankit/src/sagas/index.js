import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchData() {
  const json = yield fetch('https://api.covid19api.com/summary')
    .then(response => response.json(), ); 
    //console.log('At the fetch'+json);  
  yield put({ type: "COUNTRY_DATA", json: json, });
}
function* actionWatcher() {
	yield takeLatest('GET_DATA', fetchData)
}
export default function* rootSaga() {
	yield all([
		actionWatcher(),
	]);
}