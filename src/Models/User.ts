export interface IUser {
    userName: string;
    displayName: string;
    profileImg: string;
    email?: string;
    loginToken?: string;
    password?: string;
}

export class User implements IUser {
    userName: string;
    displayName: string;
    profileImg: string;
    email?: string;
    loginToken?: string;
    password?: string;

    constructor(userInfo: any) {
        this.userName = userInfo.userName;
        this.displayName = userInfo.displayName;
        this.profileImg = userInfo.profileImg;
        this.email = userInfo.email;
        this.loginToken = userInfo.loginToken;
        this.password = userInfo.password;
    }
}