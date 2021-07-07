import React from 'react';
import '../Styles/Splash.css';
import {
    Button,
    FormGroup,
    Form,
    Badge
  } from 'reactstrap';
import {withRouter} from 'react-router'


class SplashComponent extends React.Component<any, any>{

    constructor(props) {
        super(props);
    }

    signinClick(){
        this.props.history.push("/signin");

    }

    signupClick()
    {
        this.props.history.push("/signup");

    }

    render() {
        return (
        
          <div id="parent-div">
            <div id="img-div">
            

            <div id ="splash-div" className= "splash-component">
          
                <h1 id="splash-header">Hello and welcome to Bohemian Grove, the #1 social media site for conspiracy theorists.</h1>
                <Button id="signin-button" onClick = {()=>this.signinClick()}>Sign In</Button>
                <Button id="signup-button" onClick = {()=>this.signupClick()}>Sign Up</Button>
        
            
            </div> 
        </div>
    </div>
      );
    }
}
export default withRouter(SplashComponent);


