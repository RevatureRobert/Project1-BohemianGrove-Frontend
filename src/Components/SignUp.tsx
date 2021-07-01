import React from 'react';
import logo from './logo.svg';
import '../Styles/SignUp.css';
import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback
} from 'reactstrap';
import { render } from 'react-dom';

class SignUpComponent extends Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        username: ' ',
        displayname: ' ',
        password: ' ',
        email: ' ',
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
        console.log(`Email: ${this.state.email}`);
      }
      
      render() {
        const { username, displayname, password, email } = this.state;
        return (
          <div className="SignUpComponent">
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => this.submitForm(e)}>

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
                />
              </FormGroup>

              <FormGroup>
                  <Label for="displayName">Handle</Label>
                  <Input
                  type="text"
                  name="handle"
                  id="displayName"
                  />
              </FormGroup>

              <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                  type="text"
                  name="username"
                  id="username"
                  />
              </FormGroup>
            <Button id="submit-button">Submit</Button>
          </Form>
        </div>
      );
                }
  }

export default SignUpComponent;
