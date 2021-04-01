import Product from './Product'
import { useRetail } from './RetailContext'

const ProductList = () => {
  const {
    state: { products }
  } = useRetail()

  return (
    <div className="row">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
