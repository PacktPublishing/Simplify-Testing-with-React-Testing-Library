import * as React from 'react'
import Cart from './Cart'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'

const Retail = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <ProductDetail />
        <Cart />
      </div>

      <ProductList />
    </div>
  )
}

export default Retail
