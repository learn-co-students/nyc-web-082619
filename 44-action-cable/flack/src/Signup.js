import React from 'react'
import { signup } from './redux/actions'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'

class Signup extends React.Component {

  state = {
    input: ""
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.state.input, this.props.history)
    .then(() => this.props.alert.show("Signed in!"))
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Sign Up!"
          />
        </form>
      </div>
    )
  }
}

export default connect(null, {signup})(withAlert()(Signup))