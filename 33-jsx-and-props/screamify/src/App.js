import React, { Component } from 'react';
import './App.css';
import data from './data'
import ScreamListItem from './ScreamListItem'


class App extends Component{

  renderTiles(){
    const components = data.map(scream => {
      return (
        <ScreamListItem 
          title={scream.title}
          screamer={scream.screamer}
          duration={scream.duration}
        />
      )
    })

    return components
  }

  render(){
    return (
      <div className="App">
        <h1>Your screams</h1>
        {this.renderTiles()}
      </div>
    );
  }
}





export default App



// export { App, somethingElse }; // named export
