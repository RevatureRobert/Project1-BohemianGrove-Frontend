import React from "react";
<<<<<<< HEAD
import { Component } from "react";

class ProfileComponent extends Component<any,any> {
=======
import { Component, useState } from "react";
import { ListGroup, Card, CardBody, CardImg, Container, CardTitle, CardSubtitle, CardText,
        Nav, NavItem, NavLink, TabContent, Row, Col, TabPane, Button } from 'reactstrap';
import thumbnail from '../thumbnails-z1-1.png';
import '../Styles/Profile.css';
import axios from 'axios';



class ProfileComponent extends Component<any,any> {
    
    constructor(props){
        super(props);
        this.state = {
          postsList:[],
          
        };
      }

    componentDidMount() {
        //TODO
        //Pull user specific posts from endpoint upon initialization of component
        //Also pull user profile
        

    }

    renderProfile() {
        //TODO
        //Pull user profile from endpoint and populate card --> Return card
        return ( <div></div>);
    }

    //Render individual cards for each post
    renderItems() {
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

            ));
    }
>>>>>>> mohamed-hassan

    render() {
        return (
            <div>

<<<<<<< HEAD
=======
            <Row>
                <Col>
                //TODO
                //User Profile Card
                <Container>
                    {this.renderProfile()}
                </Container>
                
                </Col>
                <Col>
                <h4>User History</h4>

                <Container>
                    <ListGroup>
                        {this.renderItems()}
                    </ListGroup>
                </Container>
            
                </Col>

            </Row>
                
>>>>>>> mohamed-hassan
            </div>
        )
    }
}

export default ProfileComponent;