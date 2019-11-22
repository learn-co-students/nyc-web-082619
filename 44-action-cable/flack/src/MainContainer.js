import React from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ChannelsContainer from './ChannelsContainer'
import ChatContainer from './ChatContainer'

import { ActionCableConsumer } from 'react-actioncable-provider'

import { withAlert } from 'react-alert'

import { addMessage } from './redux/actions'


function MainContainer(props){

  const handleBroadcast = (data) => {
    if (props.currentUser.id !== data.message.user_id){
      props.alert.show(`
        ${data.message.channel_name}: \n

        ${data.message.username}: ${data.message.content}
        `)
      props.addMessage(data.message)
    }


  }

  if (props.currentUser){
    return (
      <div className="main-container">
        <ActionCableConsumer 
          channel={{channel: "UsersChannel", id: props.currentUser.id}}
          onReceived={handleBroadcast}
        />
        <ChannelsContainer />
        <ChatContainer key={props.currentChannelId}/>
      </div>
    )
  } else {
    return <Redirect to="signup" />
  }
}

function msp(state){
  return {currentUser: state.currentUser, currentChannelId: state.currentChannelId}
}

export default connect(msp, {addMessage})(withAlert()(MainContainer))