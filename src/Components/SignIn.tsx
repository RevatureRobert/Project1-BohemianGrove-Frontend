import React from 'react';
import logo from './logo.svg';
import '../Styles/SignIn.css';
import { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SignUpComponent from './SignUp';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { withRouter } from 'react-router';
>>>>>>> mohamed-hassan
=======
import { withRouter } from 'react-router';
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Badge
} from 'reactstrap';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> mohamed-hassan
=======
import axios from 'axios';
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d



class SignInComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
      email: '',
=======
      username: '',
>>>>>>> mohamed-hassan
=======
      username: '',
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
  //
  //TODO
  //Update redux store's login Token by calling GET /api/users/authenticate
  //

<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
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
<<<<<<< HEAD
    console.log(`Email: ${this.state.email}`);
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d

    const auth = { userName : "johncena", password: "12345"}
    axios.post('http://localhost:3000/api/users/authenticate', auth).then(resp => console.log(resp)).then(this.props.history.push('/feed'));
    console.log(`Username: ${this.state.username}, Password: ${this.state.password}`);
<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
  }
  render() {
    const { email, password } = this.state;
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="App">
=======
      <div id="sign-in-div" className="App">
>>>>>>> mohamed-hassan
=======
      <div id="sign-in-div" className="App">
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
        <h2>Bohemian Grove</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
        <FormGroup>
                  <Label for="username">Username</Label>
   
                  <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Login"
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  onChange={e => this.setState({ username: e.target.value})}
>>>>>>> mohamed-hassan
=======
                  onChange={e => this.setState({ username: e.target.value})}
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
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
<<<<<<< HEAD
=======
              onChange={e => this.setState({ password: e.target.value})}
>>>>>>> mohamed-hassan
=======
              onChange={e => this.setState({ password: e.target.value})}
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
            />
          </FormGroup>
          <div className="signInButtonsContainer">
            <Button id="submit-button">Submit</Button>
            {/* <Link id="redirect-new-user" to="/signup">New User? Start here.</Link> */}
            <Button id="submit-button">Demo Login</Button>
          </div>
      </Form>
      <Route exact path='/signup' component={SignUpComponent} />
      

    </div>
  );
}
}

<<<<<<< HEAD
<<<<<<< HEAD
export default SignInComponent;
=======
export default withRouter(SignInComponent);
>>>>>>> mohamed-hassan
=======
export default withRouter(SignInComponent);
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d



