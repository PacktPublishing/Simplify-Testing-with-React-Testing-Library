import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import React from 'react'
import Row from './Row'

export const EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      name
      department
      title
    }
  }
`

const Table = () => {
  const { loading, error, data } = useQuery(EMPLOYEES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>There was an Error</p>

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
        {data.employees.map(employee => {
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
