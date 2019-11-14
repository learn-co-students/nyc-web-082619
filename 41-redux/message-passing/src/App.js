import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

  dispatch = (action) => {
    this.setState(prevState => {
      return this.reducer(prevState, action)
    })
  }

  reducer = (prevState, action) => {
    switch(action.type){
      case "LIKE":
        return {...prevState, likes: prevState.likes + 1}
      case "DISLIKE":
        return {...prevState, likes: prevState.likes - 1}
      case "DARK_MODE":
        return {...prevState, darkMode: !prevState.darkMode}
      case "HANDLE_CHANGE":
        return {...prevState, text: action.payload}
      case "RESET_LIKES":
        return {...prevState, likes: 0}
      case "ADD_THANG":
        return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
      default:
        return prevState
    }
  }


  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch({type: "DARK_MODE"})}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(e) => this.dispatch({type: "HANDLE_CHANGE", payload: e.target.value})}/>
        <button onClick={() => this.dispatch({type: "ADD_THANG"})}>Add a thang</button>

        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch({type: "LIKE"})}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={() => this.dispatch({type: "DISLIKE"})}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={() => this.dispatch({type: "RESET_LIKES"})}>
          Reset Likes <span role="img" aria-label="thumbs middle">✊</span>
        </button>
        <ul>
          {
            this.state.thangs.map(thang => <li>{thang}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
