import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import NavigationBar from './Components/NavBar';
import SignInComponent from './Components/SignIn';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render((
  
  // <React.StrictMode>
  //   <NavigationBar />
  //   <SignInComponent />
  // </React.StrictMode>,
  // document.getElementById('root'),
  
  
  <BrowserRouter>
    <App />
  </BrowserRouter>

  
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
