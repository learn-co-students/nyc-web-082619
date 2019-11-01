import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {
  // constructor(props){
  //   super()
  //   console.log("CONSTRUCTING", props.name)
  // }

  componentDidMount(){
    this.interval = setInterval(()=>console.log("GHOST ECHOOOOO"), 1000)
  }

  componentWillUnmount(){
    console.log("UNMOUNTING CHILD")

    clearInterval(this.interval)
  }

  render(){

    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child