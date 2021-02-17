import { useRetail } from './RetailContext'

const Product = ({ title, price, image, id }) => {
  const { getDetails } = useRetail()
  return (
    <div className="col-lg-4 mb-2">
      <div onClick={() => getDetails(id)} className="card shadow">
        <img
          className="m-auto"
          style={{ width: '15rem', height: '16rem' }}
          src={image}
          alt={title}
        />
        <div className="card-body">
          <h5 data-testid="product-title" className="card-title">
            {title}
          </h5>
          <p className="card-text">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
