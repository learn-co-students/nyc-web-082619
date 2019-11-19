const defaultState = {
  pokemon: null
}


function reducer(prevState = defaultState, action){
  console.log("POKE REDUCER", action)
  switch(action.type){
    case "CHOOSE_POKEMON":
      return {...prevState, sprite: action.payload.sprites.front_shiny}
    default:
      return prevState
  }
} 

export default reducer
