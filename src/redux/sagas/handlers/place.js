import { call, put } from "redux-saga/effects";
import { setPlace } from "../../ducks/place";
import { requestGetPlace } from "../requests/place";

export function* handleGetPlace(action){
    try{
        const response = yield call(requestGetPlace,action.text);
        const { data } = response;
        yield put(setPlace(data));
    }catch (error){
        console.log(error)
    }
}