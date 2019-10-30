import React from 'react'

// class ScreamForm extends React.Component {

//   // state = {
//   //   searchInput: ""
//   // }


//   handleChange = (event) => {
//     // this.setState({
//     //   searchInput: event.target.value
//     // })

//     this.props.applyFilter(event.target.value)

//   }

//   // handleSubmit = (event) => {
//   //   event.preventDefault()
    
//     // this.props.applyFilter(this.state.searchInput)

//   //   this.setState({
//   //     searchInput: ""
//   //   })
//   // }


//   render(){
//     console.log("STATE", this.state)
//     return (
//       <form className="scream-search">
//         <input 
//           type="text" 
//           value={this.props.term}
//           placeholder="Search..."
//           onChange={this.handleChange}/>
//       </form>
//     )
//   }
// }


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

