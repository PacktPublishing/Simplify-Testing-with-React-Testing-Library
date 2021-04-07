import PropTypes from 'prop-types'
const Row = props => {
  return (
    <tr data-testid="row">
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
