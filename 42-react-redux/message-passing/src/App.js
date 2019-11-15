import React from 'react';
import './App.css';
// connects this component to the store
import { connect } from 'react-redux'
import Child from "./Child"
import { addDislike, handleChange } from './redux/actions'



class App extends React.Component {

  render(){
    return (
      <div className={"App" + (this.props.darkModeRedux ? " dark" : "")}>
        <button onClick={() => {}}>Dark mode</button>
        <h3>{this.props.textRedux}</h3>
        <input 
          name="text" 
          value={this.props.textRedux} 
          onChange={(e) => {this.props.handleChange(e.target.value)}}/>
        <button onClick={() => {}}>Add a thang</button>

        <h4>{this.props.likesRedux} likes</h4>
        <button onClick={this.props.addDislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={() => {}}>
          Reset Likes <span role="img" aria-label="thumbs middle">✊</span>
        </button>
        <ul>
          {
            this.props.thangsRedux.map(thang => <li>{thang}</li>)
          }
        </ul>
        <Child/>
      </div>
    );
  }
} // end of App




function mapStateToProps(state){
  // pick parts of state that you want to be available to this component
  // add them to props

  return {
    darkModeRedux: state.darkMode,
    likesRedux: state.likes,
    thangsRedux: state.thangs,
    textRedux: state.text
  }
}

// function mapDispatchToProps(dispatch){

//   return {
//     removeDislike: () => {
//       dispatch(removeDislike())
//     },    
//     addDislike: () => {
//       dispatch(addDislike())
//     },
//     handleChange: (text) => {
//       dispatch(handleChange(text))
//     }
//   }
// }

const ConnectedApp = connect(mapStateToProps, { 
  addDislike,
  handleChange
})(App)



export default ConnectedApp;



