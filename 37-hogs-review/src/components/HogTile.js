import React from 'react'
import HogDetails from './HogDetails'

class HogTile extends React.Component{

  state = {
    activated: false
  }

  toggleCard = () => {
    this.setState({
      activated: !this.state.activated
    })
  }

  slugify(){
    return this.props.name.toLowerCase().replace(/\s/g, "_") + ".jpg"
  }

  render(){
    return (
      <div className="pigTile" onClick={this.toggleCard}>
        <h3>{this.props.name}</h3>
        <img src={`./hog-imgs/${this.slugify()}`} />
        {this.state.activated ? <HogDetails {...this.props}/> : null}
      </div>
    )
  }
}

export default HogTile