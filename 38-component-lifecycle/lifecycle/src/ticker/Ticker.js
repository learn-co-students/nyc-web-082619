import React from 'react'

class Ticker extends React.Component {

  state = {
    color: "black",
  }

  componentDidUpdate(prevProps, prevState){

    console.log(this.props.children)
    if(this.props.value > prevProps.value){
      this.setState({
        color: "green"
      })
    } else if (this.props.value < prevProps.value) {
      this.setState({
        color: "red"
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.value !== this.props.value
  }


  render(){
    return (
      <div className="box">
        <div style={{color: this.state.color}}>
          <h1>{this.props.value}</h1>
        </div>
      </div>
    );
  }
}

export default Ticker