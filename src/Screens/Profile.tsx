import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../Redux/Store";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { IPost } from "../models/Post";
import Feed from "../Components/Feed";
import User from "../Components/User"
import { IUser } from "../models/User";
import { Col, Row} from "reactstrap";

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
        <div>
                <Col className="settingCol" sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="settingPostContainer">
                        {!user && <Redirect to="/login" />}
                        <User user={thisUser} />
                        <Feed posts={posts} />
                    </div>
                </Col>
        </div>
        
    );
}

export default Profile;