import React from 'react';
import logo from './logo.svg';
import '../Styles/SignIn.css';
import { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SignUpComponent from './SignUp';

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Badge
} from 'reactstrap';



class SignInComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: '',
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
    console.log(`Email: ${this.state.email}`);
  }
  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <h2>Bohemian Grove</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
        <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Login"
                  />
              </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
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

export default SignInComponent;



