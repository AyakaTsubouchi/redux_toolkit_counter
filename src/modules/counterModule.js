import {createSlice}from '@reduxjs/toolkit';

//createSlice() takes care of reducer and action.
const counterModule = createSlice({
    name:'counter', //action.type
    initialState:0,
    reducers:{
        increment:(state,action)=>state+1,
        decrement:(state,action)=>state-1
    }
})

export default counterModule;