import React from 'react';
import './Styles/App.css';
import NavigationBar from './Components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Screen imports
import GlobalFeed from './Screens/GlobalFeed';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import Settings from './Screens/Settings';
import SignUp from './Screens/SignUp';
import Splash from './Screens/Splash';
import ReloadFeed from './Screens/ReloadFeed';



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/feed">
            <GlobalFeed />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/search/:term">
            <Search />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/reloadFeed">
            <ReloadFeed />
          </Route>
          <Route exact path="/:userName">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
