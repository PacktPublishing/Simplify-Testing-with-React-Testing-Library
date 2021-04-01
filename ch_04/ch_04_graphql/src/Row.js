const Row = props => {
  return (
    <tr data-testid="row">
      <td>{props.name}</td>
      <td>{props.department}</td>
      <td>{props.title}</td>
    </tr>
  )
}

export default Row
