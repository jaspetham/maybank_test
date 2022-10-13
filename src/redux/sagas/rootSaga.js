// import { takeLatest } from "redux-saga/effects";
// import { GET_USER } from "../ducks/user";
// import { handleGetUser } from "./handlers/user";

// export function* watcherSaga(){
//     yield takeLatest(GET_USER, handleGetUser)
// }

import { takeLatest } from "redux-saga/effects";
import { GET_PLACE } from "../ducks/place";
import { handleGetPlace } from "./handlers/place";

export function* watcherSaga(){
    yield takeLatest(GET_PLACE, handleGetPlace)
}