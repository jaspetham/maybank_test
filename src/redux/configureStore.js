import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSageMiddleware from "redux-saga";
import placeReducer from './ducks/place';
import searchReducer from './ducks/search';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
    place: placeReducer,
    search: searchReducer    
});

const sagaMiddleware = createSageMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
    reducer,
    {},
    applyMiddleware(...middleware)
);

sagaMiddleware.run(watcherSaga);

export default store;
