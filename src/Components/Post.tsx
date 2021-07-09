import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import {IPost} from '../Models/Post'
import {Redirect} from 'react-router-dom';
import { useState } from 'react';

interface IProps {
    post: IPost
}

const Post: React.FC<IProps> = (props: IProps) => {
    const [redirect, setRedirect] = useState('');
    
    if (redirect) return <Redirect to={redirect}/>

    return (
        <div id="CardContainer">
            <Card >
                <CardBody>
                    <CardImg id="card-image" top width="10px" height="80px" src={props.post.displayImg} alt={props.post.displayImg} />
                    <CardTitle style={{cursor: 'pointer'}} id="card-title" tag="h5" onClick={(e) => setRedirect("/" + props.post.userName)}>{props.post.displayName}</CardTitle>
                    <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{props.post.userName}</CardSubtitle>
                </CardBody>
                <CardText id="body">{props.post.postBody}</CardText>
                {props.post.postImg && <CardImg src={props.post.postImg} alt={props.post.postImg}/>}
                <CardText id="timestamp">{new Date(props.post.postTime || 0).toLocaleString()}</CardText>
            </Card>
        </div>
    );
}

export default Post;