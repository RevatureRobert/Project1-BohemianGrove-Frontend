import React from 'react';
import axios from 'axios';

const initialState = {
    loginToken: ' ',
    user: {
        userName: ' ',
        displayName: ' ',
        email: ' ',
        profileImg: 'png'
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case "REQUEST_USERS_DATA":
        return {
          ...state,
          isLoading: true,
          isError: false,
          errorMsg: ""
        };
      case "RECEIVE_USERS_DATA":
        return {
          ...state,
          user: action.usersData,
          isLoading: false,
          isError: action.isError,
          errorMsg: action.errorMsg
        };
      default:
        return state;
    }
  }


