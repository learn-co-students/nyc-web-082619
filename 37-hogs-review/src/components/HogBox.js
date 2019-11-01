import React from 'react'
import HogTile from './HogTile'

function HogBox(props){

  function renderHogs(){
    return props.hogs.map(hog => {
      return <HogTile {...hog}/>
    })
  }

  return (
    <div>{renderHogs()}</div>
  )
}

export default HogBox