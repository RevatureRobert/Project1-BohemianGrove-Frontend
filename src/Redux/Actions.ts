
export enum Actionables {
    INITIAL_LOGIN = 'Initial login',
    NEW_SIGNUP = 'New user signup',
    FETCH_TOKEN = 'Fetch token'
}

export interface IActionables {
    type : Actionables
}

export interface AppActions extends IActionables {
    type: Actionables,
    payload: {
        username: string,
        password: string
    }
}