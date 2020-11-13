import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterModule from '../modules/counterModule'


//prepare rootReducer
const rootReducer = combineReducers({
    counter:counterModule.reducer
})

//export the redux
export const setupStore = ()=>{
    const middlewares = [...getDefaultMiddleware(),logger];
    
    const store = configureStore({
        reducer:rootReducer,
        middleware:middlewares
    });
    return store
}