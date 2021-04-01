import PropTypes from 'prop-types'
import React from 'react'
import Row from './Row'

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
          return <Row key={employee.id} {...employee} />
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      department: PropTypes.string,
      title: PropTypes.string
    }).isRequired
  )
}

export default Table
