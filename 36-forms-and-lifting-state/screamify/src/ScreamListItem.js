import React from 'react' // gives you babel

class ScreamListItem extends React.Component {
  convertToTime(){
    let seconds = this.props.duration % 60
    let minutes = Math.floor(this.props.duration/60)

    if (seconds < 10)
      seconds = "0" + seconds

    return `${minutes}:${seconds}`
  }

  handleClick = () => {
    this.props.setDisplayedTitle(this.props.title, this.props.screamer)
  }


  render(){
    const { title, screamer } = this.props
    return (
      <div 
        className="tile"  
        onClick={this.handleClick}
        style={{color: this.props.color}}
      >
        <p>{title}</p>
        <p>{screamer}</p>
        <p>{this.convertToTime()}</p>
      </div>
    )
  }
}

export default ScreamListItem

