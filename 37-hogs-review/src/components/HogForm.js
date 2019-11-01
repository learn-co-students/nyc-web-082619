import React from 'react'

function HogForm(props){
  return (
    <div className="filter-pigs">
      <button onClick={props.toggleFilter}>{props.filter ? "Not o" : "O"}nly greasy bois</button>

      <button onClick={props.toggleNameSort}>Sort by name</button>

      <input value={props.searchTerm} onChange={props.handleInput} placeholder="Search pigs..." />
    </div>
  )
}

export default HogForm