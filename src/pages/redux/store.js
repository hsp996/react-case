import {createStore,combineReducers, applyMiddleware} from 'redux'
import {numberReducer,infoReducer} from "./reducer";
import  createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({number:numberReducer,info:infoReducer})

const Store = createStore(rootReducer,{number:1,info:{name:null}},applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)


export default Store
