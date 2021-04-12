import PropTypes from 'prop-types'
import * as React from 'react'
/* 
  Note: When rendering the Register component, create an anonymous function
  to resolve the handleRegister dependency. Here is an example:
  <Register handleRegister={values => console.log(values)} />
*/
const Register = props => {
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = event => {
    const { id, value } = event.target
    setValues({ ...values, [id]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.handleRegister(values)
  }

  return (
    <main className="m-3 d-flex flex-column">
      <h1 className="align-self-center text-center">Register here</h1>
      <form onSubmit={handleSubmit} className="align-self-center">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input
            value={values.password}
            onChange={handleChange}
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

export default Register

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired
}
