import { Component } from 'react';
import { Card, ListGroup, ListGroupItem, 
        CardBody, CardImg, CardTitle, 
        CardSubtitle, CardText, FormGroup,
        Label, Input, Button } from 'reactstrap';
import '../Styles/Card.css';
import thumbnail from '../thumbnails-z1-1.png';
import axios from 'axios';
import '../Styles/Feed.css';
import { connect } from 'react-redux';



class Feed extends Component<any, any> {

    // const[postsList, setPostsList] = useState([]);
    // const[newInput, setNewInput] = useState(null);


    constructor(props){
        super(props);
        this.state = {
          postsList:[],
          newInput: ' ',
          loginToken: ' '
        };
      }

      

    async componentDidUpdate() {
        let posts: string[] = [];
        //this.setState({ postsList : initialState.user});
        const res =  await axios.get('http://localhost:3000/api/posts').then(res => {
            console.log(res.data);
            res.data.forEach(post => posts.push(post)); 
            posts.reverse();
            this.setState({ postsList : posts });
        });
      }

    async componentDidMount() {
        //TODO
        //Fetch posts from endpoint and pass to state
        let posts: string[] = [];
        //this.setState({ postsList : initialState.user});
        const res =  await axios.get('http://localhost:3000/api/posts').then(res => {
            console.log(res.data);
            res.data.forEach(post => posts.push(post)); 
            this.setState({ postsList : posts });
        });

        
    }


    createNewDate(time) {
        return new Date(time).toLocaleString();
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
              <CardText id="timestamp">{ this.createNewDate(card.postTime)}</CardText>
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
            const postBody = { post: { userName: "JohnCena", displayName: 'NowYouSeeMeNowYouDont', displayImg: 'undefined',
                 postBody: this.state.newInput, postImg: 'undefined'}};

            axios.post('http://localhost:3000/api/posts', postBody).then(resp => console.log(resp));
        }

    render() {
        return(
            <div className="globalFeedContainer" key={this.state.index}>
                <Card id="AddPostContainer">
                    <CardBody>
                        <CardTitle id="new-card-title" tag="h5">Add new: </CardTitle>
                        <FormGroup>
                            <Label for="exampleText">What's on your mind?</Label>
                            <Input 
                                type="textarea" 
                                name="text" 
                                id="exampleText" 
                                onChange={(e) => this.setState({ newInput: e.target.value })}/>
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

export default Feed

//export default connect(null, {}) (Feed);
