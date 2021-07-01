import React from 'react';
import '../Styles/Card.css';
import thumbnail from '../thumbnails-z1-1.png';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardContainer = (props) => {
  return (
    <div id="CardContainer">
      <Card >
        
        <CardBody>
        <CardImg id ="card-image" top width="10px" height = "80px"  src={thumbnail} alt="Card image cap" />
          <CardTitle id="card-title" tag="h5">Card title</CardTitle>
          <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@Card subtitle</CardSubtitle>
          
          
        </CardBody>
        <CardText id="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      </Card>
    </div>
  );
};

export default CardContainer;