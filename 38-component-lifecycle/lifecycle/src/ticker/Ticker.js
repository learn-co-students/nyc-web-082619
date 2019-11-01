import React from 'react'

class Ticker extends React.Component {
  render(){
    return (
      <div className="box">
        <div >
          <h1>{this.props.value}</h1>
        </div>
      </div>
    );
  }
}

export default Ticker