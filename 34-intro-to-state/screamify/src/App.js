import React, { Component } from 'react';
import './App.css';
import data from './data'
import ScreamListItem from './ScreamListItem'


class App extends Component{

  state = {
    clicked: true
  }

  renderTiles = () => {
    const components = data.map(scream => {
      return (
        <ScreamListItem 
          title={scream.title}
          screamer={scream.screamer}
          duration={scream.duration}
          colorToggle={this.state.clicked}
        />
      )
    })

    return components
  }

  handleClick = (e) => {
    // this is called mutating state
    // IS A BIG NO NO because it does NOT rerender
    // this.state.clicked = false

    // update state AND trigger a rerender
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    console.log("RENDERING", this.state)

    return (
      <div className="app">
        <div className="center-container">
          <h1 style={{color: "red"}}>Screams</h1>
          <button onClick={this.handleClick}>Change color</button>
          <div className="scream-list">
            <div className="tile header">
              <p>Title</p>
              <p>Screamer</p>
              <p>Duration</p>
            </div>
            {this.renderTiles()}
          </div>
        </div>
        <div className="now-playing">
        </div>
      </div>
    );
  }
}





export default App