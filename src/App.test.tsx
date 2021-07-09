import React from 'react';
import { screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import SignInComponent from './Components/SignIn';
import SignUpComponent from './Components/SignUp';
import NavigationBar from './Components/NavBar';
import SettingsComponent from './Components/Settings';
import ProfileComponent from './Components/Profile';
import CardContainer from './Components/Card';
import Feed from './Components/Feed';
import Router from 'react-router';
import Switch from 'react-router'
import App from './App';
import { createMemoryHistory } from "history";
import { reducer } from './Redux/Store'
import { initialState } from './Redux/State';
import { mount, shallow, render, configure} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('SignUpComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<MemoryRouter><SignUpComponent/></MemoryRouter>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SignInUpComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<MemoryRouter><SignInComponent/></MemoryRouter>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SettingsComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<SettingsComponent/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('ProfileComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<ProfileComponent/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('NavigationBar', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<NavigationBar/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('Feed', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Feed/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('CardContainer', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<CardContainer/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('App', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('get')
  it("should render title", () => {
    const wrapper = render(
      <MemoryRouter>
        <SignUpComponent />
     </MemoryRouter>
    );
    expect(wrapper.queryAllByText("Bohemian Grove")).toHaveLength(1);
  });

  it("should render title", () => {
    const wrapper = render(
      <MemoryRouter>
        <SignInComponent />
     </MemoryRouter>
    );
    expect(wrapper.queryAllByText("Bohemian Grove")).toHaveLength(1);
  });


  it("should render title", () => {
    const wrapper = render(
      <MemoryRouter>
        <Feed/>
     </MemoryRouter>
    );
    expect(wrapper.queryAllByText("new-card-title")).toHaveLength(1);
  });



it('has a languageName of "TypeScript"', () => {
  const state: typeof initialState = { 
    loginToken: 'TypeScript',
    user: {
        userName: ' ',
        displayName: ' ',
        email: ' ',
        profileImg: 'png'
    }
  };
  expect(state.loginToken).toEqual('TypeScript');
});


it('has a userName', () => {
  const state: typeof initialState = { 
    loginToken: 'TypeScript',
    user: {
        userName: 'johncena',
        displayName: ' ',
        email: ' ',
        profileImg: 'png'
    }
  };
  expect(state.user.userName).toEqual('johncena');
});


test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      loginToken: " ",
      user:{
        displayName: ' ',
        email: ' ',
        password: ' ',
        profileImg:'png',
        userName:' '
        }
    }
  )
})

describe('SignInComponent', () => {
  it("should update the route on click of the button",() => {
    const history = createMemoryHistory();
    const wrapper = render(
      <Router history="{history}">
        <SignInComponent/>
     </Router>
    );
    wrapper.getByText("submit-button").click();
    expect(history.location.pathname).toBe("/feed");
  });
});


describe('manage profile page test suite', () => {
  it('snapshot test', () => {
      const setRouteLeaveHook =jest.fn();

      let wrapper = shallow(
          <Feed params={{router: 
      setRouteLeaveHook}}/>
      );
    expect(wrapper).toMatchSnapshot();
  })
 })
 
 it("should render title", () => {
  const wrapper = render(
    <MemoryRouter>
      <Feed/>
    </MemoryRouter>
    
  );
  expect(wrapper.queryAllByText("What's on your mind?")).toHaveLength(1);
});

 it('feed renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Feed />
  </MemoryRouter>
  , div);
});


