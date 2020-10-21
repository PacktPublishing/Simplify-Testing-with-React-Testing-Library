import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.title}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      department: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  )
}

export default Table
