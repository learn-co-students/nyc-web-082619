const defaultState = {
  likes: 0,
  text: "",
  darkMode: false,
  thangs: []
}

// createStore function takes an argument of another function
// this function is what we call a reducer
// return what the new state should be
// whatever is returned from thus function BECOMES state

function reducer(prevState = defaultState, action){
  // console.log("PREVSTATE", prevState)
  // console.log("ACTION", action)

  switch(action.type){
    case "REMOVE_DISLIKE":
      return {...prevState, likes: prevState.likes + 1}  
    case "ADD_DISLIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "DARK_MODE":
      return {...prevState, darkMode: !prevState.darkMode}
    case "HANDLE_CHANGE":
      return {...prevState, text: action.payload}
    case "RESET_LIKES":
      return {...prevState, likes: 0}
    case "ADD_THANG":
      return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
    // case "RESET":
    //   return defaultState
    default:
      return prevState
  }

}

export default reducer