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
import axios from 'axios';


class Feed extends Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
          postsList:[],
          newInput: ' ',
          index: '1'
        };
      }

      

      componentDidCatch() {
          console.error();
          
      }

    async componentDidMount() {
        //TODO
        //Fetch posts from endpoint and pass to state
        let posts: string[] = [];
        const res =  await axios.get('http://localhost:3000/api/posts').then(res => {
            console.log(res.data);
            res.data.forEach(post => posts.push(post)); 
            this.setState({ postsList : posts });
        });

        
        // for(let elem of res.data) {
        //     posts.push(elem);
        // }
        
        
        // let posts = [
        //     {
        //         username: "John Smith",
        //         handle: "JohnnyAppleSeed",
        //         timestamp: "12.23.12:11.22.34",
        //         img: "thumbnail",
        //         body: "Peter Parker Piper Pan",
        //     },
        //     {
        //         username: "Jane Doe",
        //         handle: "GrabAPailOfWater",
        //         timestamp: "11.37.23:44.48.09",
        //         img: "thumbnail",
        //         body: "Some random shitpost.",
        //     }
        // ]
        // this.setState( {postsList : posts});
        
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
              <CardImg id ="card-image" top width="10px" height = "80px"  src={thumbnail} alt={thumbnail} />
                <CardTitle id="card-title" tag="h5">{card.displayName}</CardTitle>
                <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{card.userName}</CardSubtitle>
                
                
              </CardBody>
              <CardText id="body">{card.postBody}</CardText>
              <CardText id="timestamp">{card.postTime}</CardText>
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

        createPost() {
            //TODO
            //Get user credentials from token
            //Send Post request to server
            let currTime = new Date().toLocaleString();
            const postBody = { Post: { userName: 'JohnCena', postTime: '12.12.34', displayName: 'NowYouSeeMeNowYouDont', dispalyImg: 'undefined',
                 postBody: 'Wrestlemania 2021: MetLife Stadium', postImg: 'undefined'}};

            axios.post('http://localhost:3000/api/posts', postBody).then(resp => console.log(resp));
        }

    render() {
        return(
            // onChange={(event) => this.updateNewInput(event.target.value) }
            <div key={this.state.index}>

                <Card id="AddPostContainer">
                    <CardBody>
                        <CardTitle id="new-card-title" tag="h5">Add new: </CardTitle>
                        <FormGroup>
                            <Label for="exampleText">What's on your mind?</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Button onClick={() => this.createPost()} id="post-button" color="primary">Post</Button>
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
