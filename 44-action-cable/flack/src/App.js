import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import Signup from "./Signup"
import MainContainer from "./MainContainer"



function App(props) {
  return (
    <div className="App">
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={MainContainer}/>
    </div> 
  );
}




export default App;
