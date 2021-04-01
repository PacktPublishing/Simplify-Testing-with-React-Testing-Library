const Row = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.department}</td>
      <td>{props.title}</td>
    </tr>
  )
}

export default Row
