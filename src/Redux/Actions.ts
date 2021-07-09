
export enum LogActions {
    LOGIN = 'Log In',
    LOGOUT = 'Log Out',
}

export interface ILogActions{
    type: LogActions,
    payload: {
        username: string,
        password: string
    }
}
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