import * as React from 'react'

const EmployeeEmail = () => {
  const [email, setEmail] = React.useState('')
  const handleChange = event =>
    setEmail(event.target.value.split(' ').join('.'))

  return (
    <div className="w-50 m-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="enter your name"
          aria-label="enter your name"
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span className="input-group-text">@software-plus.com</span>
        </div>
      </div>
      {email ? <span>{`${email}@software-plus.com`}</span> : null}
    </div>
  )
}

export default EmployeeEmail
