import React from 'react';
import '../Styles/Card.css';
import thumbnail from '../thumbnails-z1-1.png';
import { Posts } from '../models/Posts';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';




const CardContainer = (props) => {
  return (
    <div id="CardContainer">
      <Card >
        
        <CardBody>
        <CardImg id ="card-image" top width="10px" height= "80px"  src={thumbnail} alt="Card image cap" />
          <CardTitle id="card-title" tag="h5">{props.handle}</CardTitle>
          <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{props.username}</CardSubtitle>
          
          
        </CardBody>
        <CardText id="body">{props.body}</CardText>
        <CardText id="timestamp">{props.timestamp}</CardText>
      </Card>
    </div>
  );
};

export default CardContainer;