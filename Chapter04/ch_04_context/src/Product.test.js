import { render, screen } from '@testing-library/react'
import faker from 'faker'
import fakeProducts from './mocks/fakeProducts'
import Product from './Product'
import { RetailProvider } from './RetailContext'

test('Product, given product properties, renders to screen', () => {
  const product = {
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion()
  }

  render(
    <RetailProvider products={fakeProducts}>
      <Product
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    </RetailProvider>
  )

  expect(screen.getByText(product.title)).toBeInTheDocument()
  expect(screen.getByText(`$${product.price}`)).toBeInTheDocument()
})
