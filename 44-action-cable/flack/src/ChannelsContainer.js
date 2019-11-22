import React from 'react'

import { connect } from 'react-redux'
import { loadChannels, selectChannel } from './redux/actions'

import NewChannelForm from './NewChannelForm'

class ChannelsContainer extends React.Component{

  componentDidMount(){
    this.props.loadChannels()
  }
  
  renderChannels = () => {
    return this.props.channels.map(channel => {
      return <li key={channel.id} onClick={()=> {this.props.selectChannel(channel.id)}}>{channel.name}</li>
    })
  }

  render(){
    return (
      <div className="channel-container">
        <NewChannelForm />
        {this.renderChannels()}
      </div>
    )
  }
  
}

function msp(state){
  return {channels: state.channels}
}

export default connect(msp, { loadChannels, selectChannel })(ChannelsContainer)
