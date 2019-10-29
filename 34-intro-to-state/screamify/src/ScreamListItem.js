import React from 'react' // gives you babel

class ScreamListItem extends React.Component {


  convertToTime(){
    let seconds = this.props.duration % 60
    let minutes = Math.floor(this.props.duration/60)

    if (seconds < 10)
      seconds = "0" + seconds

    return `${minutes}:${seconds}`
  }


  render(){
    const { title, screamer } = this.props

    return (
      <div className="tile" style={{color: this.props.colorToggle ? "red" : "white"}}>
        <p>{title}</p>
        <p>{screamer}</p>
        <p>{this.convertToTime()}</p>
      </div>
    )
  }
}

export default ScreamListItem

