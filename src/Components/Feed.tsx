import '../Styles/Feed.css';
import React from "react";
import { ListGroup } from "reactstrap";
import { IPost } from "../Models/Post";
import Post from "./Post";

interface IProps {
    posts: IPost[],
    className?: string
}

const Feed: React.FC<IProps> = (props: IProps) => {
    
    
    return (
        <div>
            <ListGroup className={props.className}>
                {props.posts.map((post, i) => {
                    return <Post post={post} key={i}/>
                })}
            </ListGroup>
        </div>
    );
}

export default Feed;