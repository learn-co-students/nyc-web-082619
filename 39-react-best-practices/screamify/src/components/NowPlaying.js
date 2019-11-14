import React from 'react'

function NowPlaying (props){
  return (
    <div className="now-playing">
      <h3>Now Playing</h3>
      <h4>Title: {props.displayedTitle}</h4>
      <h4>By: {props.displayedScreamer}</h4>
    </div>
  )
}


export default NowPlaying