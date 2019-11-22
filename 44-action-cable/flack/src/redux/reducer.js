const defaultState = {
  currentUser: null,
  channels: [],
  currentChannelId: null
}

function reducer(state = defaultState, action){
  switch(action.type){
    case "SIGN_IN":
      return {...state, currentUser: action.payload}
    case "CREATE_CHANNEL":
      return {...state, channels: [...state.channels, action.payload]}
    case "LOAD_CHANNELS":
      return {...state, channels: action.payload, currentChannelId: action.payload[0].id}
    case "SET_CURRENT_CHANNEL":
      return {...state, currentChannelId: action.payload}
    case "ADD_MESSAGE":
      const newChannels = state.channels.map(channel => {
        if (channel.id === action.payload.channel_id){
          return {...channel, messages: [...channel.messages, action.payload]}
        } else {
          return channel
        }
      })
      return {...state, channels: newChannels}
    default:
      return state
  }
}

export default reducer