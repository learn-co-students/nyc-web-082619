
export function signup(username, history){
  return function(dispatch){
    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ username })
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
      } else {
        dispatch({type: "SIGN_IN", payload: response})
        history.push("/channels")
      }
    })
  }
}

export function createChannel(name){
  return function(dispatch){
    return fetch("http://localhost:3001/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ name })
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        dispatch({type: "CREATE_CHANNEL", payload: response})
      }
    })
  }
}

export function loadChannels(){
  return function(dispatch){
    return fetch("http://localhost:3001/channels")
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        dispatch({type: "LOAD_CHANNELS", payload: response})
      }
    })
  }
}

export function createMessage(content, user_id, channel_id){
  return function(dispatch){
    return fetch("http://localhost:3001/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ content, user_id, channel_id })
    })
    // .then(res => res.json())
    // .then(response => {
    //   if (response.errors){
    //     alert(response.errors)
    //   } else {
    //     console.log(response)
    //     dispatch(addMessage(response))
    //   }
    // })
  }
}

export function addMessage(message){
  return {type: "ADD_MESSAGE", payload: message}
}


export function selectChannel(id){
  return {type: "SET_CURRENT_CHANNEL", payload: id}
}