import React from 'react';
import logo from './logo.svg';
import '../Styles/SignIn.css';
import { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SignUpComponent from './SignUp';
import { withRouter } from 'react-router';

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import axios from 'axios';



class SignInComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  //
  //TODO
  //Update redux store's login Token by calling GET /api/users/authenticate
  //
  
  submitForm(e) {
    e.preventDefault();
    console.log(this.state);
    const auth = { userName: this.state.username, password: this.state.password}
    // const auth = { userName: 'god', password:"123"}
    this.props.authenticate(auth).then(this.props.history.push('/feed'));
  }
  render() {
    return (
      <div id="sign-in-div" className="App">
        <h2>Bohemian Grove</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
        <FormGroup>
                  <Label for="username">Username</Label>
   
                  <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Login"
                  onChange={e => this.setState({ username: e.target.value})}
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
              onChange={e => this.setState({ password: e.target.value})}
            />
          </FormGroup>
          <div className="signInButtonsContainer">
            <Button id="submit-button">Submit</Button>
           <Button onClick={()=> console.log(this.props.user)}></Button>
          </div>
      </Form>

    </div>
  );}
}

export default SignInComponent;



