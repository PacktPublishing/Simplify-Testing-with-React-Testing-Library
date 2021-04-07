import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import * as React from 'react'

const CustomerTable = ({ data }) => {
  const [query, setQuery] = React.useState('')

  const customers = React.useMemo(() => data, [data])

  const handleChange = event => {
    setQuery(event.target.value)
  }

  const filteredCustomers = customers.filter(
    customer =>
      customer.name.toLowerCase().includes(query.toLowerCase()) ||
      customer.address.toLowerCase().includes(query.toLowerCase()) ||
      customer.phone.toLowerCase().includes(query.toLowerCase()) ||
      customer.email.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <TableContainer
        style={{ width: 'fit-content', margin: 'auto', paddingTop: '10px' }}
        component={Paper}
      >
        <TextField
          value={query}
          onChange={handleChange}
          label="filter results"
          variant="outlined"
          fullWidth
        />
        <Table aria-label="customers">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map(customer => (
              <TableRow data-testid="row" key={customer.id}>
                <TableCell component="th" scope="row">
                  {customer.name}
                </TableCell>

                <TableCell align="right">
                  <Avatar alt={customer.name} src={customer.avatar} />
                </TableCell>
                <TableCell align="right">{customer.address}</TableCell>
                <TableCell align="right">{customer.email}</TableCell>
                <TableCell align="right">{customer.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

CustomerTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CustomerTable
