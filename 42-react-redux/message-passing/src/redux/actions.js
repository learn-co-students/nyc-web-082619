export function removeDislike(){
  return {type: "REMOVE_DISLIKE"}
}

export function addDislike(){
  return {type: "ADD_DISLIKE"}
}

export function darkMode(){
  return {type: "DARK_MODE"}
}

export function handleChange(text){
  return {type: "HANDLE_CHANGE", payload: text}
}

export function addThang(){
  return {type: "ADD_THANG"}
}