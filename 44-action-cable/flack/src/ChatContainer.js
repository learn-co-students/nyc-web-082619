import React from 'react'
import NewMessageForm from './NewMessageForm'
import { connect } from 'react-redux'
import { ActionCableConsumer } from 'react-actioncable-provider'

import { addMessage } from './redux/actions'

class ChatContainer extends React.Component{

  renderMessages = () => {
    return this.props.channel.messages.map(mess => {
      return <li key={mess.id}>{mess.username}: {mess.content}</li>
    })
  }

  handleBroadcast = (data) => {
    switch(data.type){
      case "ADD":
        this.props.addMessage(data.message)
        break;
      // case "DESTROY":
      //   this.props.removeMessage(data.message)
      //   break;
    }
  }

  render(){
    if (!this.props.channel){
      return <h1>Loading...</h1>
    }
    
    return (
      <div className="chat-container">
        <ActionCableConsumer
          channel={{channel: "ChannelChannel", id: this.props.channel.id}}
          onReceived={this.handleBroadcast}
        />
        <h1>{this.props.channel.name}</h1>
        {this.renderMessages()}
        <NewMessageForm key={this.props.channel.id}/>
      </div>
    )
  }
  
}

function msp(state){
  return {
    currentUser: state.currentUser,
    channel: state.channels.find(channel => channel.id === state.currentChannelId)
  }
}
export default connect(msp, {addMessage})(ChatContainer)
