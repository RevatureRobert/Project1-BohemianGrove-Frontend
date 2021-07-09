import axios from "axios";

export enum LogActions {
    HELLO = "HELLO",
    LOGIN = 'Log In',
    LOGOUT = 'Log Out',
    ERR = "error"
}

export interface ILogActions{
    type: LogActions,
    payload: {
        username: string,
        password: string
    }
}

const authenticate = (formData) => {
    return axios.post('http://localhost:3000/api/users/authenticate', formData);
}

export const getUser = (formData) => async (dispatch) => {
  dispatch({ type: LogActions.HELLO });
  try {
    const {data} = await authenticate(formData);
    dispatch({ type: LogActions.LOGIN , payload: data });
  } catch (err) {
    dispatch({ type: LogActions.ERR, payload: err.response.data });
  }
};



// export interface IActionables {
//     type : Actionables
// }

// export interface AppActions extends IActionables {
//     type: Actionables,
//     payload: {
//         username: string,
//         password: string
//     }
// }