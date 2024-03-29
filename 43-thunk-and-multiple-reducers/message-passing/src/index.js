import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'

import otherReducer from './redux/reducer'
import pokemonReducer from './redux/pokemonReducer'

const rootReducer = combineReducers({
  beef: otherReducer,
  pokemon: pokemonReducer
})


const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



