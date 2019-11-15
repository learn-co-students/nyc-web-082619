import React from 'react'

import { removeDislike } from './redux/actions'

import { connect } from 'react-redux'

function GrandChild (props){
  return <div>I'm a grandchild!!!!        
    <button onClick={props.removeDislike}>
      Like<span role="img" aria-label="thumbs up">👍</span>
    </button>
  </div>
}

// function msp(state){
//   return {likes: state.likes}
// }




export default connect(null, { removeDislike })(GrandChild)