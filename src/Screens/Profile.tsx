import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../Redux/Store";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { IPost } from "../Models/Post";
import Feed from "../Components/Feed";
import User from "../Components/User"
import { IUser } from "../Models/User";

export const Profile: React.FC = (props: any) => {
    const user = useSelector((store: IAppState) => store.user);
    const params: any = useParams()

    const emptyArray: IPost[] = []
    const [posts, setPosts] = useState(emptyArray);
    const [thisUser, setUser] = useState<IUser>();

    function refresh() {
        // Refresh posts
        axios.get("http://localhost:3000/api/posts/" + params.userName).then(resp => {
            const newPosts = resp.data as IPost[];
            setPosts(newPosts);
        });

        // Refresh user
        axios.get("http://localhost:3000/api/users/" + params.userName).then(resp => {
            setUser(resp.data.data as IUser);
        });
    }

    useEffect(refresh, [params.userName]);

    return (
        <div className="container">
            <div className="row">
                {!user && <Redirect to="/login" />}
                <User className="col-sm" user={thisUser} />
                <Feed className="col-sm" posts={posts} />
            </div>
        </div>
    );
}

export default Profile;