import React from 'react';
import '../Styles/Splash.css';
import {withRouter} from 'react-router'




class SplashComponent extends React.Component<any, any>{

    constructor(props) {
        super(props);
    }

    // signinClick(){
    //     this.props.history.push("/signin");
    // }

    // signupClick()
    // {
    //     this.props.history.push("/signup");
    // }
    

    render() {
        return (
        
        <div id="parent-div">
                <div id ="splash-div" className= "splash-component">
        
                    <h1 id="splash-header">Welcome to Bohemian Grove, the social media site for conspiracy theorists
                    </h1>
                    
                </div> 
    </div>
      );
    }
}
export default withRouter(SplashComponent);


