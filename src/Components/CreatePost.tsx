import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Button } from "reactstrap";
import { IPost } from "../Models/Post";
import { IAppState } from "../Redux/Store";


const CreatePost: React.FC = (props: any) => {
    const user = useSelector((state: IAppState) => state.user);
    
    const [postInfo, setPostInfo] = useState<any>({});
    const [redirect, setRedirect] = useState('');

    function createPost() {
        let post: IPost = {
            userName: user?.userName || '',
            displayName: user?.displayName || '',
            displayImg: user?.profileImg || '',
        }
        if (postInfo.postBody) post = {...post, postBody: postInfo.postBody};
        if (postInfo.postImg) post = {...post, postImg: postInfo.postImg};

        console.log("Sending request...", {post});
        axios.post("http://localhost:3000/api/posts/", {post}).then(resp => {
            setRedirect("/reloadFeed");
        });
    }

    if (redirect) return <Redirect to={redirect}/>;
    
    return (
        <div>
            <Card id="CardContainer">
                <CardBody>
                    <CardTitle id="new-card-title" tag="h5">Add new: </CardTitle>
                    <FormGroup>
                        <Label for="exampleText">What's on your mind?</Label>
                        <Input
                            type="textarea"
                            name="text"
                            id="exampleText"
                            onChange={(e) => setPostInfo({...postInfo, postBody: e.target.value})} />
                    </FormGroup>
                    <Button onClick={() => createPost()} id="post-button" color="primary">Post</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default CreatePost;