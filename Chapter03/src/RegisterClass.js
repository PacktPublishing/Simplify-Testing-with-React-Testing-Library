import PropTypes from 'prop-types'
import * as React from 'react'

export default class Register extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    const { id, value } = event.target
    this.setState(prevState => {
      return {
        ...prevState,
        [id]: value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleRegister(this.state)
    //console.log(this.state)
  }
  render() {
    return (
      <main className="m-3 d-flex flex-column">
        <h1 className="align-self-center text-center">Register here</h1>
        <form onSubmit={this.handleSubmit} className="align-self-center">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    )
  }
}

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired
}
