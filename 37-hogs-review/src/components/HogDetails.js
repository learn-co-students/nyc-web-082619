import React from 'react'

function HogDetails(props){
  return (
    <div className="pigDetails">
      <p>{props.specialty}</p>
      <p>{props.weight} refrigerators</p>
      <p>{props.greased ? "" : "Not "}Greased</p>
      <p>{props["highest medal achieved"]}</p>
    </div>
  )
}

export default HogDetails