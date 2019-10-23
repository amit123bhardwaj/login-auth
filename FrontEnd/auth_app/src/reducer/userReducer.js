import React from 'react';
import {getUserData} from '../action/userAction';


const defaultState={
    user:{},
};

export const userReducer=(state=defaultState,action)=>{
    if(action.type==='USER_DATA'){
     state.user=action.userData;
     return state;
    }
};