import React, { Component } from 'react';
import './App.css';
// import data from './data'
import ScreamListItem from './ScreamListItem'
import SearchForm from './SearchForm'
import NowPlaying from './NowPlaying'
import TestForm from './TestForm'

class App extends Component {

  state = {
    screams: [],
    term: "",
    displayedTitle: "",
    displayedScreamer: "",
    loading: true,
    number: 0
  }

  applyFilter = (filterTerm) => {

    // OVERWRITES STATE!
    // const filtered = this.state.screams.filter(scream => scream.title.includes(filterTerm))

    // this.setState({
    //   screams: filtered
    // })

    this.setState({
      term: filterTerm
    })
  }


  renderTiles = () => {
    const filteredScreams = this.state.screams.filter(scream => scream.title.includes(this.state.term))


    const components = filteredScreams.map(scream => {
      return (
        <ScreamListItem 
          key={scream.id}
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
    // this.setState({
    //   displayedTitle: newTitle,
    //   displayedScreamer: screamer
    // })

    this.setState({
        displayedTitle: newTitle,
        displayedScreamer: screamer
    })
  }

  componentDidMount(){
    this.fetchScreams()
  }

  fetchScreams = () => {
    fetch("http://localhost:3001/screams")
    .then(res => res.json())
    .then(data => {
      // NO NO mutating state
      // this.state.screams.push()

      // NO NO NO
      // this.forceUpdate()

      // triggers a rerender
      this.setState({
        screams: data,
        loading: false
      })
    })
  }

  addOne = () => {
    // setState is asynchronous because state changes are pooled meaning all the changes in all the setStates are gathered together before changing state and triggering rerender

    // if values of new state depend on old state, use functional setState

    this.setState(
      (prevState) => {
        return {number: prevState.number + 1}
      }, 
      () => {
        console.log("AFTER", this.state.number)
      }
    )

    console.log("LINE AFTER", this.state.number)
  }




  renderBody = () => {
    if (this.state.loading){
      return <div className="wrap">
            <div className="loading">
              <div className="bounceball"></div>
              <div className="text">NOW LOADING</div>
            </div>
          </div>
    } else {
      return <div className="center-container">
            <div className="top-panel">
              <TestForm />
              <h1>Screams</h1>
              <SearchForm applyFilter={this.applyFilter} term={this.state.term}/>
            </div>
            <div className="scream-list">
              <div className="tile header">
                <p>Title</p>
                <p>Screamer</p>
                <p>Duration</p>
              </div>
              {this.renderTiles()}
            </div>
            <NowPlaying 
              displayedTitle={this.state.displayedTitle} 
              displayedScreamer={this.state.displayedScreamer} 
            />
          </div>
    }
  }

  render(){
    console.log("RENDERING", this.state.number)
    return (
      <div className="app">
        {this.renderBody()}
      </div>
    );
  }
}




export default App