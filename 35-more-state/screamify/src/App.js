import React, { Component } from 'react';
import './App.css';
import data from './data'
import ScreamListItem from './ScreamListItem'

class App extends Component {

  state = {
    displayedTitle: "",
    displayedScreamer: ""
  }


  renderTiles = () => {
    const components = data.map(scream => {
      return (
        <ScreamListItem 
          title={scream.title}
          screamer={scream.screamer}
          duration={scream.duration}
          color={scream.title === this.state.displayedTitle ? "red" : "white"}
          setDisplayedTitle={this.setDisplayedTitle}
        />
      )
    })

    return components
  }

  setDisplayedTitle = (newTitle, screamer) => {
    this.setState({
      displayedTitle: newTitle,
      displayedScreamer: screamer
    })
  }

  render(){
    return (
      <div className="app">
        <div className="center-container">
          <h1>Screams</h1>
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
          <h3>Now Playing</h3>
          <h4>Title: {this.state.displayedTitle}</h4>
          <h4>By: {this.state.displayedScreamer}</h4>
        </div>
      </div>
    );
  }
}





export default App