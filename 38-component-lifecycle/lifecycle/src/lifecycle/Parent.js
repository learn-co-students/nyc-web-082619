import React from 'react'
import Child from './Child'

class Parent extends React.Component {
  // constructor(props){
  //   super()
  //   console.log("CONSTRUCTING", props.name)
  // }

  // componentDidMount(){
  //   console.log("DID MOUNT", this.props.name)

  //   // set state without fear

  //   // used for fetching
  //   // adding custom event listeners
  //   // anything that requires the DOM first be loaded
  // }

  state = {
    clicked: true
  }

  toggle = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  componentDidUpdate(prevProps, prevState){
    // this.props + this.state //current props and state

    // beware of setting state

    // if (prevProps.roomId !== this.props.roomId){
    //   fetch
    // }
 

  }

  render(){
    return (
      <div className="box">
        <button onClick={this.toggle}>Click</button>
        <p>Parent</p>
        {this.state.clicked ? <Child name="child"/> : null} 
      </div>
    );
    
  }
}

export default Parent

// constructor parent
// render parent
// did mount parent
// constructor child
// render child
// did mount child
// constructor grandchild
// render grandchild
// did mount grandchild
