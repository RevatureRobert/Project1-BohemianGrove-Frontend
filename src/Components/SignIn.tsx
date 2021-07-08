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
  FormFeedback,
  Badge
} from 'reactstrap';
import axios from 'axios';



class SignInComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //
  //TODO
  //Update redux store's login Token by calling GET /api/users/authenticate
  //

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

    const auth = { userName : "johncena", password: "12345"}
    axios.post('http://localhost:3000/api/users/authenticate', auth).then(resp => console.log(resp)).then(this.props.history.push('/feed'));
    console.log(`Username: ${this.state.username}, Password: ${this.state.password}`);
  }
  render() {
    const { email, password } = this.state;
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
        <Button id="submit-button">Submit</Button>
        
            <Link id="redirect-new-user" to="/signup">New User? Start here.</Link>
        
        
        
      </Form>
      <Route exact path='/signup' component={SignUpComponent} />
      

    </div>
  );
}
}

export default withRouter(SignInComponent);



