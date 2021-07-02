import React from 'react';
import CardContainer from './Card';
import { Component } from 'react';
import { Card, ListGroup, ListGroupItem, 
        CardBody, CardImg, CardTitle, 
        CardSubtitle, CardText, FormGroup,
        Label, Input, Button } from 'reactstrap';
import { render } from '@testing-library/react';
import '../Styles/Card.css';
import thumbnail from '../thumbnails-z1-1.png';
import { string } from 'yargs';


class Feed extends Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
          postsList:[],
          newInput: ' ',
        };
      }

      componentDidCatch() {
          console.error();
          
      }

    componentDidMount() {
        //TODO
        //Fetch posts from endpoint and pass to state

        
        let posts = [
            {
                username: "John Smith",
                handle: "JohnnyAppleSeed",
                timestamp: "12.23.12:11.22.34",
                img: "thumbnail",
                body: "Peter Parker Piper Pan",
            },
            {
                username: "Jane Doe",
                handle: "GrabAPailOfWater",
                timestamp: "11.37.23:44.48.09",
                img: "thumbnail",
                body: "Some random shitpost.",
            }
        ]
        this.setState( {postsList : posts});
        
    }

    addNewPost() {
        //TODO
        //Add new post via POST endpoint
    }

    renderItems()  {
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

        updatePostState() {
            //this.setState( {postsList :posts});
        }

        updateNewInput(e) {
            this.setState({ newInput: e });
            
        }

    render() {
        return(
            // onChange={(event) => this.updateNewInput(event.target.value) }
            <div >

                <Card id="AddPostContainer">
                    <CardBody>
                        <CardTitle id="new-card-title" tag="h5">Add new: </CardTitle>
                        <FormGroup>
                            <Label for="exampleText">What's on your mind?</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Button id="post-button" color="primary">Post</Button>
                    </CardBody>
                </Card>
            
                <ListGroup>
                    {this.renderItems()}
                </ListGroup>
    
    
            </div>
        )
    }
}

export default Feed;
