import React from 'react'

import { removeDislike, fetchPokemon } from './redux/actions'

import { connect } from 'react-redux'

function GrandChild (props){

  const handleClick = () => {
    props.fetchPokemon()
    .then()
  }


  return <div>I'm a grandchild!!!!
    <button onClick={handleClick}>Get a pokemon!!!!</button>        
    <button onClick={props.removeDislike}>
      Like<span role="img" aria-label="thumbs up">👍</span>
    </button>
  </div>
}

// function msp(state){
//   return {likes: state.likes}
// }




export default connect(null, { removeDislike, fetchPokemon })(GrandChild)