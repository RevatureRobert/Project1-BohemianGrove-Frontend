import React from "react";
import { Component } from "react";
import { Row, Container, Col, Form, FormGroup, Card, CardBody, CardSubtitle, CardText, CardTitle, CardImg, Label, Input, Button } from 'reactstrap';
import thumbnail from '../thumbnails-z1-1.png';
import '../Styles/Settings.css'
import axios from 'axios';

class SettingsComponent extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            password: ' ',
            displayname: ' ',
            email: ' ',
            currUser : [],
            validate: {
                emailState: ' '
            }
        }
    }


    //TODO
    //Render form for updating profile information
    componentDidMount() {
        const userName = "kai";
        axios.get('http://localhost:3000/api/users/kai').then(resp => {
            console.log(resp);
            this.setState({ currUser: resp.data.data });
        })
    }

    renderProfileCard() {
        return  (
            <div id="CardContainer">
            <Card >              
              <CardBody>
              <CardImg id ="card-image" top width="10px" height = "80px"  src={thumbnail} alt="Card image cap" />
                <CardTitle id="card-title" tag="h5">{this.state.currUser.displayName}</CardTitle>
                <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{this.state.currUser.userName}</CardSubtitle>
                                
              </CardBody>
         
            </Card>
          </div>

        )}
        
       
        updateUser() {
            const userObject = { loginToken: " ", user: { userName: "kai", displayName: "Jared", email: "revature@revature.net", profileImg: "undefined"}};
            axios.put('http://localhost:3000/api/users', userObject).then(resp => console.log(resp));
        }

        submitForm(e) {
            //TODO
            //Update user along endpoint http://localhost:3000/api/users PUT
            let eue = e.target.value;
            
        }

        validateEmail(e) {
            const emailRex =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
            const { validate } = this.state;
        
            if (emailRex.test(e.target.value)) {
              validate.emailState = 'has-success';
            } else {
              validate.emailState = 'has-danger';
            }
        
            this.setState({ validate });
          }

         componentDidUpdate() {
             //TODO
             //Rerender profile card when user submits update
         }

    render() {
        return(
            <div>
                <Row>
                    <Col>
                        { this.renderProfileCard() }
                    </Col>
                    <Col>
                       
            <div id="update-settings-form">
            <Form className="form" onSubmit={(e) => this.submitForm(e)} >
              <FormGroup>
                <Label for="exampleEmail">Update Settings</Label>                
              </FormGroup>

              <FormGroup>
                  <Label for="username">Username</Label>
                  //TODO --= Change to text field
                  <Input
                  type="text"
                  name="username"
                  id="username"
                  onChange = {(e) => this.setState({ username: e.target.value })}
                  />
              </FormGroup>

              <FormGroup>
                  <Label for="displayName">Handle</Label>
                  <Input
                  type="text"
                  name="handle"
                  id="displayName"
                  onChange = {(e) => this.setState({ displayname: e.target.value })}
                  />
              </FormGroup>
              
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  onChange = {(e) => this.setState({ password: e.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="teamOne@revature.com"
                  valid={this.state.validate.emailState === "has-success"}
                  invalid={this.state.validate.emailState === "has-danger"}
                  onChange={(e) => {
                    this.validateEmail(e);
                    this.setState({ email: e.target.value });
                  }}
                />
              </FormGroup>

              <Button color="primary" id="submit-button" onClick={() => this.updateUser()} onSubmit={(e) => this.submitForm(e)}>Submit</Button>
            </Form>
            </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default SettingsComponent;