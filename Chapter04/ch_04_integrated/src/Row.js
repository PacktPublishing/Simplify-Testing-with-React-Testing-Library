import PropTypes from 'prop-types'

const Row = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.department}</td>
      <td>{props.title}</td>
    </tr>
  )
}

Row.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Row
