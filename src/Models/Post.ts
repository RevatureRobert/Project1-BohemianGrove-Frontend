export interface IPost {
    userName: string;
    postTime?: number;
    displayImg: string;
    displayName: string;
    postBody?: string;
    postImg?: string;
}

export class Post {
    userName: string;
    postTime?: number;
    displayImg: string;
    displayName: string;
    postBody?: string;
    postImg?: string;

    constructor(postInfo: any) {
        this.userName = postInfo.userName;
        this.postTime = postInfo.postTime;
        this.displayImg = postInfo.displayImg;
        this.displayName = postInfo.displayName;
        this.postBody = postInfo.postBody;
        this.postImg = postInfo.postImg;
    }
}