import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'

import reducer from './redux/reducer'
// import { handleChange } from './redux/actions'


const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));





// console.log("BEFORE DISPATCH", store.getState())
// // dispatch:
// // new setState - used to change state
// // always takes what is called an action

// // action: 
// // just a POJO 
// // must always have a key of type that will be used in the reducer to determine what case to invoke
// store.dispatch(handleChange("beouf"))


// console.log("AFTER DISPATCH", store.getState())


// // action creator:
// // sole job is to return an action (object with a type key)
