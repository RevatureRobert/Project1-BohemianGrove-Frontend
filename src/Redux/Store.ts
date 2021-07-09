import React from 'react';
import axios from 'axios';
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { userInfo } from 'os';
import { create } from 'domain';
import { AppActions, Actionables } from './Actions';

const initialState = {
    loginToken: ' ',
    data: [],
    user: {
        userName: ' ',
        displayName: ' ',
        password: ' ',
        email: ' ',
        profileImg: 'png'
    }
}

export const getToken = () => initialState.loginToken;

  const grabToken = () => {
    
  }

 export const reducer = (state = initialState, action: AppActions) => {
    const newState = {...state};
    switch (action.type) {
      case Actionables.INITIAL_LOGIN:
          grabToken(); 
        return {
          ...newState,
        };
      case Actionables.NEW_SIGNUP:
        return {
          ...state,
          
        };
        case Actionables.INITIAL_LOGIN:
          newState.user.userName = action.payload.username;
        newState.user.password = action.payload.password;
         axios.post('http://localhost:3000/api/users/authenticate').then(resp => { 
            console.log(resp.data.loginToken);
            newState.loginToken = resp.data.loginToken;
        });
        return {
          ...state,
          
          

        };
      default:
        return state;
    }
  }

  export const requestToken = user => async dispatch => {
      
      try {
        let jsonToken: string = ' ';
        await axios.post('http://localhost:3000/api/users/authenticate', { 
            userName: user.payload.username,
            password: user.payload.password
        }).then(resp => {
            console.log(resp)
        })
          dispatch({ 
            type: "FETCH_TOKEN"
            
            
        })
      } catch(err) {
          console.log(err);
      }
  }

  export const store = createStore(reducer, applyMiddleware(thunkMiddleware));


