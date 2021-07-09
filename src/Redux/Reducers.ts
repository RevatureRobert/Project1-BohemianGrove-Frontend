import { UserAction, IUserActions } from "./Actions";
import { IAppState, initialState } from "./Store";


export const reducers = (state: IAppState = initialState, action: IUserActions): IAppState => {
    const newState = {...state};
    switch(action.type) {
        case UserAction.LOGIN:
            return {...newState, ...action.payload};
        case UserAction.LOGOUT:
            return {user: undefined};
        default:
            return newState;
    }
}