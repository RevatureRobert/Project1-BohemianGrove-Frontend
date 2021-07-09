import './Styles/App.css';
import SignInComponent from './Components/SignIn';
import SignUpComponent from './Components/SignUp';
import NavigationBar from './Components/NavBar';
import SplashComponent from './Components/Splash';
import SettingsComponent from './Components/Profile';
import Feed from './Components/Feed';
import { Switch, Route, } from 'react-router-dom';
import { Component } from 'react';

class App extends Component<any, any> {
  render() {
    return (
      
      <div className="appContainer">
      
      <NavigationBar />

          <Switch>
            <Route exact path="/">
              <SplashComponent />
            </Route>
            <Route exact path="/signin">
              <SignInComponent />
            </Route>
            <Route exact path="/signup">
              <SignUpComponent />
            </Route>
            <Route exact path="/feed">
              <Feed />
            </Route>
            <Route exact path="/profile">
              <SettingsComponent />
            </Route>
          </Switch>

        </div>
      
    )
  }
}

export default App;


// class App extends Component<any, any> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       validate: {
//         emailState: '',
//       },
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (event) => {
//     const { target } = event;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const { name } = target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   validateEmail(e) {
//     const emailRex =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     const { validate } = this.state;

//     if (emailRex.test(e.target.value)) {
//       validate.emailState = 'has-success';
//     } else {
//       validate.emailState = 'has-danger';
//     }

//     this.setState({ validate });
//   }

//   submitForm(e) {
//     e.preventDefault();
//     console.log(`Email: ${this.state.email}`);
//   }
//   render() {
//     const { email, password } = this.state;
//     return (
//       <div className="App">
//         <h2>Bohemian Grove</h2>
//         <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          

//           <FormGroup>
//                   <Label for="username">Username</Label>
//                   <Input
//                   type="text"
//                   name="username"
//                   id="username"
//                   placeholder="Login"
//                   />
//               </FormGroup>

//           <FormGroup>
//             <Label for="examplePassword">Password</Label>
//             <Input
//               type="password"
//               name="password"
//               id="examplePassword"
//               placeholder="********"
//             />
//           </FormGroup>
//         <Button id="submit-button">Submit</Button>
        
//         <Label href="#" onClick= {() => {<SignUpComponent />} } id="redirect-to-signup" >New User? Start here.</Label>  
        
        
//       </Form>
//     </div>
//   );
// }
// }

// export default App;



