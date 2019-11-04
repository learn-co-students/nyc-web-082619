import React from 'react'


function ScreamForm(props){

  const handleChange = (event) => {
    props.applyFilter(event.target.value)
  }

  return (
      <form className="scream-search">
        <input 
          type="text" 
          value={props.term}
          placeholder="Search..."
          onChange={handleChange}/>
      </form>
  )
}


export default ScreamForm