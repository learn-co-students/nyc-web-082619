import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from "./redux/reducer"
import thunk from 'redux-thunk'

import { ActionCableProvider } from 'react-actioncable-provider'

import { BrowserRouter as Router } from 'react-router-dom'

const options = {
  timeout: 4000,
  position: positions.TOP_RIGHT
};



const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ActionCableProvider url="ws://localhost:3001/cable">
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
      </ActionCableProvider>
    </Router>
  </Provider>
, document.getElementById('root'));

