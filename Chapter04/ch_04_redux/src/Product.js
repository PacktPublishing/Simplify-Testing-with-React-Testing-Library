import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { showDetails } from './retailSlice'

const Product = ({ title, price, image, id }) => {
  const dispatch = useDispatch()
  return (
    <div className="col-4 mb-2">
      <div onClick={() => dispatch(showDetails(id))} className="card shadow">
        <img
          className="m-auto"
          style={{ width: '12rem', height: '12rem' }}
          src={image}
          alt={title}
        />
        <div className="card-body">
          <h5
            style={{ fontSize: '0.9rem' }}
            data-testid="product-title"
            className="card-title"
          >
            {title}
          </h5>
          <p style={{ fontSize: '0.9rem' }} className="card-text">
            ${price}
          </p>
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Product
