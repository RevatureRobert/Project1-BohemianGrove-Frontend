import React from 'react';
import axios from 'axios';
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { userInfo } from 'os';
import { create } from 'domain';

const initialState = {
    loginToken: ' ',
    user: {
        userName: ' ',
        displayName: ' ',
        password: ' ',
        email: ' ',
        profileImg: 'png'
    }
}


export function reducer(state = initialState, action) {
    const newState = {...state};
    switch (action.type) {
      case "INITIAL_LOGIN":
        newState.user.userName = action.payload.username;
        newState.user.password = action.payload.password;
        axios.get('http://localhost:3000/api/users/authenticate').then(resp => { 
            console.log(resp.data.loginToken);
            newState.loginToken = resp.data.loginToken;
        });
        return {
          ...newState,
        };
      case "NEW_SIGNUP":
        return {
          ...state,
          user: action.usersData,

        };
        case "FETCH_TOKEN":
        return {
          ...state,
          user: action.usersData,

        };
      default:
        return state;
    }
  }

  export const requestToken = user => async dispatch => {
      dispatch({
          type: "FETCH_TOKEN"
      });
      try {
        let jsonToken: string = ' ';
        await axios.post('http://localhost:3000/api/users/authenticate', { 
            userName: user.username,
            password: user.passowrd
        }).then(resp => {
            console.log(resp)
            jsonToken = resp.data.loginToken
        })
          dispatch({ 
            loginToken: jsonToken
        })
      } catch(err) {
          console.log(err);
      }
  }

  export const store = createStore(reducer, applyMiddleware(thunkMiddleware));


