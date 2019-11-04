import React from 'react'


class TestForm extends React.Component {

  state = {
    name: "",
    age: 0,
    address: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }  

  render(){
    console.log(this.state)
    return (
      <form className="scream-search">
        <input 
          type="text" 
          value={this.state.name}
          name="name"
          placeholder="Name..."
          onChange={this.handleChange}/>
        <input 
          type="text" 
          value={this.state.age}
          name="age"
          placeholder="Age..."
          onChange={this.handleChange}/>
        <input 
          type="text" 
          value={this.state.address}
          name="address"
          placeholder="Address..."
          onChange={this.handleChange}/>
      </form>
    )
  }
  
}


export default TestForm