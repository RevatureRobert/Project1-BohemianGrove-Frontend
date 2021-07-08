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
=======
<<<<<<< HEAD
<<<<<<< HEAD
  Label,
  FormFeedback
} from 'reactstrap';
import { render } from 'react-dom';
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
  Label, Container, Row, Col
} from 'reactstrap';
import { render } from 'react-dom';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main

class SignUpComponent extends Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        username: ' ',
        displayname: ' ',
        password: ' ',
        email: ' ',
<<<<<<< HEAD
        isUser: false,
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        isUser: false,
>>>>>>> mohamed-hassan
=======
        isUser: false,
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(`Email: ${this.state.email}`);
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
        
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
      }
      
      render() {
        const { username, displayname, password, email } = this.state;
        return (
<<<<<<< HEAD
          <div id="sign-up-form" className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)} >
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)}>
=======
          <div id="sign-up-form" className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)} >
>>>>>>> mohamed-hassan
=======
          <div id="sign-up-form" className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)} >
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main

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
                    this.setState({ email: e.target.value });
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    this.setState({ email: e.target.value });
>>>>>>> mohamed-hassan
=======
                    this.setState({ email: e.target.value });
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
                  }}
                />
              </FormGroup>
                    <p></p>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
<<<<<<< HEAD
                  onChange = {(e) => this.setState({ password: e.target.value })}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  onChange = {(e) => this.setState({ password: e.target.value })}
>>>>>>> mohamed-hassan
=======
                  onChange = {(e) => this.setState({ password: e.target.value })}
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
                />
              </FormGroup>
                    <p></p>
              <FormGroup>
                  <Label for="displayName">Handle</Label>
                  <Input
                  type="text"
                  name="handle"
                  id="displayName"
<<<<<<< HEAD
                  onChange = {(e) => this.setState({ displayname: e.target.value })}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  onChange = {(e) => this.setState({ displayname: e.target.value })}
>>>>>>> mohamed-hassan
=======
                  onChange = {(e) => this.setState({ displayname: e.target.value })}
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
                  />
              </FormGroup>
                    <p></p>
              <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                  type="text"
                  name="username"
                  id="username"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  />
              </FormGroup>
            <Button id="submit-button">Submit</Button>
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
                  onChange = {(e) => this.setState({ username: e.target.value })}
                  />
              </FormGroup>
            <Row>
              <Col>
              <Button id="submit-button" onSubmit={(e) => this.submitForm(e)}  >Submit</Button>
              </Col>
              <Col>
              <div id="redirect-from-signup">
              {this.renderLogin()}
              
              </div>
            
              </Col>
            </Row>
            
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
          </Form>
        </div>
      );
                }
  }

<<<<<<< HEAD
export default withRouter(SignUpComponent);
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default SignUpComponent;
=======
export default withRouter(SignUpComponent);
>>>>>>> mohamed-hassan
=======
export default withRouter(SignUpComponent);
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
