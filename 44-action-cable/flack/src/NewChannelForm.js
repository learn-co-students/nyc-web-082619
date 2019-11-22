import React from 'react'

import { connect } from 'react-redux'
import { createChannel } from './redux/actions'

class NewChannelForm extends React.Component{


  state = {
    input: ""
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createChannel(this.state.input)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Create"
          />
        </form>
      </div>
    )
  }
  
}

export default connect(null, { createChannel })(NewChannelForm)
