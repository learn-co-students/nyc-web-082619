import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import ScreamContainer from './containers/ScreamContainer'
import Welcome from './components/Welcome';
import FoOhFo from './components/FoOhFo';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/screams" component={ScreamContainer} />
          {/* <ScreamContainer /> */}
          <Route exact path="/" component={Welcome} />
          {/* <Welcome /> */}
          <Route component={FoOhFo} />
        </Switch>

      </div>
    );
  }
}





export default App