import React from 'react'

import { connect } from 'react-redux'

import { createMessage } from './redux/actions'

class NewMessageForm extends React.Component{

  state = {
    input: ""
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    if (!e.shiftKey && e.which === 13){
      this.props.createMessage(this.state.input, this.props.currentUser.id, this.props.currentChannelId)
      .then(() => this.setState({input: ""}))
    }
  }


  render(){
    return (
      <div className="message-form" onKeyPress={this.handleSubmit}>
        <textarea className="input" value={this.state.input} onChange={this.handleChange}/>
      </div>
    )
  }
  
}
function msp(state){
  return {
    currentUser: state.currentUser,
    currentChannelId: state.currentChannelId
  }
}

export default connect(msp, { createMessage })(NewMessageForm)
