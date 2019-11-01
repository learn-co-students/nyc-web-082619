import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogBox from './HogBox'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    filter: false,
    sortByName: false,
    searchTerm: ""
  }

  handleInput = (event) => {
    this.setState({
      searchTerm: event.target.value.toLowerCase()
    })
  }

  toggleFilter = () => {
    this.setState({
      filter: !this.state.filter
    })
  }
  toggleNameSort = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  hogsToRender = () => {
    let filtered = hogs.filter(hog => {
      return hog.name.toLowerCase().includes(this.state.searchTerm)
    });

    if (this.state.filter){
      filtered =  filtered.filter(hog => hog.greased)
    }

    if (this.state.sortByName){
      return [...filtered].sort((hog1, hog2) => {
        if (hog1.name > hog2.name){
          return 1
        } else if (hog1.name < hog2.name){
          return -1
        } else {
          return 0
        }
      })
    } else {
      return filtered
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Nav 
            filter={this.state.filter} 
            toggleFilter={this.toggleFilter}
            toggleNameSort={this.toggleNameSort}
            handleInput={this.handleInput}
            searchTerm={this.state.searchTerm}
          />
          <HogBox hogs={this.hogsToRender()}/>
      </div>
    )
  }
}

export default App;
