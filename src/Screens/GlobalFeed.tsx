import '../Styles/Feed.css';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../Redux/Store";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Feed from '../Components/Feed';
import CreatePost from '../Components/CreatePost';
import { IPost } from "../Models/Post";

export const GlobalFeed: React.FC = (props: any) => {
    const user = useSelector((store: IAppState) => store.user);

    const emptyArray: IPost[] = []
    const [posts, setPosts] = useState(emptyArray);

    function refresh() {
        axios.get("http://localhost:3000/api/posts/").then(resp => {
            const newPosts = resp.data as IPost[];
            setPosts(newPosts);
        });
    }

    useEffect(refresh, []);

    return (
        <div>
            {!user && <Redirect to="/login" />}
            <CreatePost/>
            <Feed posts={posts} />
        </div>
    );
}

export default GlobalFeed;