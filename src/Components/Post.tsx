import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

import { IPost } from '../Models/Post'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../Redux/Store';
import axios from 'axios';

interface IProps {
    post: IPost
}

const Post: React.FC<IProps> = (props: IProps) => {
    const user = useSelector((store: IAppState) => store.user);

    const [redirect, setRedirect] = useState('');

    function deletePost(userName: string, postTime: number) {
        axios.delete("http://localhost:3000/api/posts/", {data: {post: {userName, postTime}}}).then(resp => {
            setRedirect("/feed");
        });
    }

    if (redirect) return <Redirect to={redirect} />

    return (
        <div id="CardContainer">
            <Card >
                <CardBody>
                    <CardImg id="card-image" top width="10px" height="80px" src={props.post.displayImg} alt={props.post.displayImg} />
                    <CardTitle style={{ cursor: 'pointer' }} id="card-title" tag="h5" onClick={(e) => setRedirect("/" + props.post.userName)}>{props.post.displayName}</CardTitle>
                    <div className="handleAndButton">
                    {(user?.userName === props.post.userName) && <Button className = "deleteButton" onClick={() => deletePost(user.userName, props.post.postTime || 0)}>X</Button>}
                    <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{props.post.userName}</CardSubtitle> 
                    </div>
                    </CardBody>
                    <CardText id="body">{props.post.postBody}</CardText>
                    {props.post.postImg && <CardImg src={props.post.postImg} alt={props.post.postImg} />}
                    <CardText id="timestamp">{new Date(props.post.postTime || 0).toLocaleString()}</CardText>
                    
            </Card>
        </div>
    );
}

export default Post;