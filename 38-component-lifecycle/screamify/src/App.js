import React, { Component } from 'react';
import './App.css';
// import data from './data'
import ScreamListItem from './ScreamListItem'
import SearchForm from './SearchForm'
import NowPlaying from './NowPlaying'

class App extends Component {

  state = {
    screams: [],
    term: "",
    displayedTitle: "",
    displayedScreamer: "",
    loading: true
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

  componentDidMount(){
    this.fetchScreams()
  }


  shouldComponentUpdate(nextProps, nextState){
    return false
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

  renderBody = () => {
    if (this.state.loading){
      return <div class="wrap">
            <div class="loading">
              <div class="bounceball"></div>
              <div class="text">NOW LOADING</div>
            </div>
          </div>
    } else {
      return <div className="center-container">
            <div className="top-panel">
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
    // console.log("RENDERING", this.state.screams)
    return (
      <div className="app">
        {this.renderBody()}
      </div>
    );
  }
}





export default App