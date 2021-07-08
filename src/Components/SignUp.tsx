import React from 'react';
import logo from './logo.svg';
import '../Styles/SignUp.css';
import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
<<<<<<< HEAD
  Label,
  FormFeedback
} from 'reactstrap';
import { render } from 'react-dom';
=======
  Label, Container, Row, Col
} from 'reactstrap';
import { render } from 'react-dom';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";


>>>>>>> mohamed-hassan

class SignUpComponent extends Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        username: ' ',
        displayname: ' ',
        password: ' ',
        email: ' ',
<<<<<<< HEAD
=======
        isUser: false,
>>>>>>> mohamed-hassan
        validate: {
            emailState: ' ',
        },
    };
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
    
        this.setState({
          [name]: value,
        });
      };

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

      submitForm(e) {
        e.preventDefault();
<<<<<<< HEAD
        console.log(`Email: ${this.state.email}`);
=======
        
        const createNewUser = { user :
          { userName: this.state.username, displayName : this.state.displayname, password: this.state.password, email: this.state.email }
        };
        axios.post('http://localhost:3000/api/users', createNewUser)
              .then(resp => console.log(resp))
              .then(this.props.history.push('/feed'));
              

        console.log(`Email: ${this.state.email}, Username: ${this.state.username}, Password: ${this.state.password}, Displayname: ${this.state.displayname}`);

        this.setState({ isUser: true});
        //TODO
        //Redirect to global feed
        this.renderLogin();
        
      }

      renderLogin() {

        if(this.state.isUser) {
        return (
          <Button color="success" id="redirect-from-signup" href = "/feed">Login!</Button>
        )
        } else {
          return <div></div>
        }
>>>>>>> mohamed-hassan
      }
      
      render() {
        const { username, displayname, password, email } = this.state;
        return (
<<<<<<< HEAD
          <div className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)}>
=======
          <div id="sign-up-form" className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)} >
>>>>>>> mohamed-hassan

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="example@example.com"
                  valid={this.state.validate.emailState === "has-success"}
                  invalid={this.state.validate.emailState === "has-danger"}
                  value={email}
                  onChange={(e) => {
                    this.validateEmail(e);
                    this.handleChange(e);
<<<<<<< HEAD
=======
                    this.setState({ email: e.target.value });
>>>>>>> mohamed-hassan
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
<<<<<<< HEAD
=======
                  onChange = {(e) => this.setState({ password: e.target.value })}
>>>>>>> mohamed-hassan
                />
              </FormGroup>

              <FormGroup>
                  <Label for="displayName">Handle</Label>
                  <Input
                  type="text"
                  name="handle"
                  id="displayName"
<<<<<<< HEAD
=======
                  onChange = {(e) => this.setState({ displayname: e.target.value })}
>>>>>>> mohamed-hassan
                  />
              </FormGroup>

              <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                  type="text"
                  name="username"
                  id="username"
<<<<<<< HEAD
                  />
              </FormGroup>
            <Button id="submit-button">Submit</Button>
=======
                  onChange = {(e) => this.setState({ username: e.target.value })}
                  />
              </FormGroup>
            <Row>
              <Col>
              <Button color="primary" id="submit-button" onSubmit={(e) => this.submitForm(e)}  >Submit</Button>

              </Col>
              <Col>
              <div id="redirect-from-signup">
              {this.renderLogin()}
              
              </div>
            
              </Col>
            </Row>
            
>>>>>>> mohamed-hassan
          </Form>
        </div>
      );
                }
  }

<<<<<<< HEAD
export default SignUpComponent;
=======
export default withRouter(SignUpComponent);
>>>>>>> mohamed-hassan
