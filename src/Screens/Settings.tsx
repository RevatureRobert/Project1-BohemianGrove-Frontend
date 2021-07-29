import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../Redux/Store";
import { Redirect } from "react-router-dom";
import User from "../Components/User";
import axios from "axios";
import Feed from "../Components/Feed";
import SettingsComp from "../Components/Settings"
import { IPost } from "../Models/Post";
import '../Styles/Settings.css';
import { Col, Row } from "reactstrap";
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
                <Row>
                    <Col className="settingCol" xs="6" sm="4">
                        <User user={user}/>
                    </Col>
                    <Col className="settingCol" xs="6" sm="4">
                        <div className="settingPostContainer">
                            <Feed posts={posts}/>
                        </div>
                        
                    </Col>
                    <Col className="settingCol" xs="6" sm="4">
                        <SettingsComp/>
                    </Col>
                </Row>
            </div>
    );
} 

export default Settings;