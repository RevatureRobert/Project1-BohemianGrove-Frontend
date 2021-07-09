import React from 'react';
import {render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Login from  './Screens/Login';
import SignUp from './Screens/SignUp';
import NavigationBar from './Components/NavBar';
import Settings from './Screens/Settings';
import SettingsComponent from './Components/Settings';
import Profile from './Screens/Profile';
import Feed from './Components/Feed';
import GlobalFeed from './Screens/GlobalFeed';
import Splash from './Screens/Splash';
import Search from './Screens/Search';
import Router from 'react-router-dom';
import App from './App';
import { initialState } from './Redux/Store';
import { mount, shallow } from 'enzyme';
import  Adapter  from '@wojtekmaj/enzyme-adapter-react-17'
import enzyme from 'enzyme'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducer } from 'react'
import { reducers } from './Redux/Reducers';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import UserList from './Components/UserList';
import User from './Components/User'



const store = createStore(reducers);

enzyme.configure({ adapter: new Adapter() });

describe('SignUpComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<MemoryRouter><SignUp/></MemoryRouter>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SignInUpComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<MemoryRouter><Login/></MemoryRouter>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SettingsComponent', ()=>{
  it('renders without crashing', () => {
  const component = mount(<Provider store={store}><MemoryRouter><Settings/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('GlobalFeedComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><GlobalFeed/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('ProfileComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><Profile/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SplashComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Splash/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SearchComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><Search/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('App', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('CreatePostComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><CreatePost/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('PostComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><Post post = {{userName:'',displayName:'',displayImg:''}} /></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('SettingsComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><SettingsComponent/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('UserComponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<User/>);
  expect(component).toMatchSnapshot();  
  });
})

describe('UserListCoponent', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<UserList users = {[]}/>);
  expect(component).toMatchSnapshot();  
  });
})

/*
describe('NavigationBar', ()=>{
  it('renders without crashing', () => {
  const component = shallow(<Provider store={store}><MemoryRouter><NavigationBar/></MemoryRouter></Provider>);
  expect(component).toMatchSnapshot();  
  });
})

describe('Feed', ()=>{
  it('renders without crashing', () => {
    
  const component = shallow(<Feed posts = {[]}/>);

  expect(component).toMatchSnapshot();  
  });
})


/*


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


it('has a languageName of "TypeScript"', () => {
  const state: typeof initialState = { 
    
    user: {
        userName: ' ',
        displayName: ' ',
        email: ' ',
        profileImg: 'png',
        loginToken: 'TypeScript',
    }
  };
  expect(state.user?.loginToken).toEqual('TypeScript');
});


it('has a userName', () => {
  const state: typeof initialState = { 
    
    user: {
        userName: 'johncena',
        displayName: ' ',
        email: ' ',
        profileImg: 'png',
        loginToken: 'TypeScript',
    }
  };
  expect(state.user?.userName).toEqual('johncena');
});

/*
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
*/
/*
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
      <Feed posts = {[]}/>
    </MemoryRouter>
    
  );
  expect(wrapper.queryAllByText("What's on your mind?")).toHaveLength(1);
});


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><SignUpComponent /></MemoryRouter>, div);
});

  it("should render title", () => {
    const wrapper = render(
      <MemoryRouter>
        <SignUpComponent />
     </MemoryRouter>
    );
    expect(wrapper.queryAllByText("Bohemian Grove")).toHaveLength(1);
  });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><SignInComponent /></MemoryRouter>, div);
});

  it("should render title", () => {
    const wrapper = render(
      <MemoryRouter>
        <SignInComponent />
     </MemoryRouter>
    );
    expect(wrapper.queryAllByText("Bohemian Grove")).toHaveLength(1);
  });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Feed /></MemoryRouter>, div);
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
  expect(reducer(undefined, {})).toEqual([
    {
      username: ' ',
      password: ' '
    }
  ])
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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router> 
                    <SignInComponent />
                  </Router>, div);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationBar />, div);
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

 it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <MemoryRouter>
    <Feed />
  </MemoryRouter>
  , div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpComponent />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SettingsComponent />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileComponent />, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardContainer />, div);
});
*/