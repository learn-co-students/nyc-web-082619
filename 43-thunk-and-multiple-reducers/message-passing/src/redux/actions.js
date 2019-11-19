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

export function choosePokemon(pokemon){
  return {type: "CHOOSE_POKEMON", payload: pokemon}
}

export function fetchPokemon(){
  return function(dispatch){
    return fetch("https://pokeapi.co/api/v2/pokemon/151")
    .then(res => res.json())
    .then(poke => {
      dispatch(choosePokemon(poke))
    })
  }
}


export function template(params){
  return function(dispatch){
    // go wild
  }
}