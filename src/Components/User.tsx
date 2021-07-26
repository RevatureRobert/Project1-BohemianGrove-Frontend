import '../Styles/Card.css'

import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import {IUser} from '../models/User'
import {Redirect} from 'react-router-dom';
import { useState } from 'react';

interface IProps {
    user?: IUser,
    className?: string
}

const Post: React.FC<IProps> = (props: IProps) => {
    const [redirect, setRedirect] = useState('');
    
    if (redirect) return <Redirect to={redirect}/>

    return (
        <div className={props.className} id="CardContainer">
            <Card >
                <CardBody>
                    <CardImg id="card-image" top width="10px" height="80px" src={props.user?.profileImg} alt={props.user?.profileImg} />
                    <CardTitle style={{cursor: 'pointer'}} id="card-title" tag="h5" onClick={(e) => setRedirect("/" + props.user?.userName)}>{props.user?.displayName}</CardTitle>
                    <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{props.user?.userName}</CardSubtitle>
                    {props.user?.email && <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">{props.user?.email}</CardSubtitle>}
                </CardBody>
            </Card>
        </div>
    );
}

export default Post;