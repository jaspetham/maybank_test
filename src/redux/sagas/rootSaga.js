import { takeLatest } from "redux-saga/effects";
import { GET_PLACE } from "../ducks/place";
import { handleGetPlace } from "./handlers/place";

export function* watcherSaga(){
    yield takeLatest(GET_PLACE, handleGetPlace)
}