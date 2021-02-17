import { render, screen } from '@testing-library/react'
import faker from 'faker'
import testProducts from './mocks/testProducts'
import Product from './Product'
import { RetailProvider } from './RetailContext'

test('Product, given product properties, renders to screen', () => {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion()
  }

  render(
    <RetailProvider products={testProducts}>
      <Product
        title={product.title}
        price={product.price}
        image={product.image}
      />
    </RetailProvider>
  )

  expect(screen.getByText(product.title)).toBeInTheDocument()
  expect(screen.getByText(`$${product.price}`)).toBeInTheDocument()
})
