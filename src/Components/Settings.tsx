import React from "react";
import { Component } from "react";
import { Row, Container, Col, Form, FormGroup, Card, CardBody, CardSubtitle, CardText, CardTitle, CardImg } from 'reactstrap';
import thumbnail from '../thumbnails-z1-1.png';

class SettingsComponent extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    //TODO
    //Render form for updating profile information

    renderProfileCard() {
        return this.state.postsList.map((card) => (
            <div id="CardContainer">
            <Card >              
              <CardBody>
              <CardImg id ="card-image" top width="10px" height = "80px"  src={thumbnail} alt="Card image cap" />
                <CardTitle id="card-title" tag="h5">{card.handle}</CardTitle>
                <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{card.username}</CardSubtitle>
                
                
              </CardBody>
              <CardText id="body">{card.body}</CardText>
              <CardText id="timestamp">{card.timestamp}</CardText>
            </Card>
          </div>

        ))
    }

    render() {
        return(
            <div>
                <Row>
                    <Col>
                        { this.renderProfileCard() }
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>

            </div>
        )
    }
}

export default SettingsComponent;