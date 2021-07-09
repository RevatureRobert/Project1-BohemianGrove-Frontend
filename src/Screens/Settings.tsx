import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../Redux/Store";
import { Redirect } from "react-router-dom";
import User from "../Components/User";
import axios from "axios";
import Feed from "../Components/Feed";
import SettingsComp from "../Components/Settings"
import { IPost } from "../Models/Post";

export const Settings: React.FC = (props: any) => {
    const user = useSelector((store: IAppState) => store.user);
    
    const emptyArray: IPost[] = []
    const [posts, setPosts] = useState(emptyArray);

    function refresh() {
        axios.get("http://localhost:3000/api/posts/" + user?.userName).then(resp => {
            const newPosts = resp.data as IPost[];
            setPosts(newPosts);
        });
    }

    useEffect(refresh, [user]);

    return (
        <div>
            {!user && <Redirect to="/login"/>}
            <User user={user}/>
            <Feed posts={posts}/>
            <SettingsComp/>
        </div>
    );
} 

export default Settings;