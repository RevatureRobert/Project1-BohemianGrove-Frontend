import React from 'react';
import '../Styles/SignUp.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    FormFeedback
  } from 'reactstrap';
import { Component } from 'react';
import { render } from 'react-dom';

class Splash extends React.Component<any, any>{

    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div className="SplashComponent">
              <FormGroup>
                  <Button id="login-button">Login</Button>
                  <Button id="signup-button">Sign UP</Button>
              </FormGroup>
            
        </div>
      );
    }
}
export default Splash;