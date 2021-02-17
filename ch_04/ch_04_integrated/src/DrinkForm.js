import PropTypes from 'prop-types'

const DrinkForm = ({ searchVal, setSearchVal, handleSubmit }) => {
  return (
    <form className="form-group m-auto w-50 pt-2" onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="search for a drink..."
        type="search"
        value={searchVal}
        onChange={event => setSearchVal(event.target.value)}
      />
      <button className="btn btn-primary mt-2 btn-block" type="submit">
        Search
      </button>
    </form>
  )
}

DrinkForm.propTypes = {
  searchVal: PropTypes.string.isRequired,
  setSearchVal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default DrinkForm
