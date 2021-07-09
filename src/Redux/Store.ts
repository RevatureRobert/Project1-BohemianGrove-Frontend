import { IUser } from "../Models/User";

export interface IAppState {
    user?: IUser;
}

export const initialState: IAppState = {
    user: undefined
}