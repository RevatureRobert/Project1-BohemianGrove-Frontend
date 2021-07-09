import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { reducers } from './Redux/Reducers';
import { IAppState } from './Redux/Store';
import { IUserActions } from './Redux/Actions';

const w: any = window;
const store: Store<IAppState, IUserActions> = createStore(reducers, w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
