const defaultState = {
  likes: 0,
  text: "",
  darkMode: false,
  thangs: []
}

function reducer(prevState = defaultState, action){
  console.log("OTHER REDUCER", action)
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
    case "CHOOSE_POKEMON":
      return {...prevState, likes: action.payload.height}
    default:
      return prevState
  }

}

export default reducer