import { IUser } from "../Models/User";

export enum UserAction {
    LOGIN = 'Login',
    LOGOUT = 'logout'
}

export interface IUserActions {
    type: UserAction,
    payload: {user?: IUser}
}