import React from 'react' // gives you babel

class ScreamListItem extends React.Component {


  render(){
    const { title, screamer, duration } = this.props

    return (
      <div className="tile">
        <h4>Title: {title}</h4>
        <h4>Screamer: {screamer}</h4>
        <h4>Duration: {duration} seconds</h4>
      </div>
    )
  }
}

export default ScreamListItem

