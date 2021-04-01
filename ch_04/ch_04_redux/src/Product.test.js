import faker from 'faker'
import Product from './Product'
import { render, screen } from './utils/test-utils'

test('Product, given product properties, renders to screen', () => {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion()
  }

  render(
    <Product
      title={product.title}
      price={product.price}
      image={product.image}
    />
  )

  expect(screen.getByText(product.title)).toBeInTheDocument()
  expect(screen.getByText(`$${product.price}`)).toBeInTheDocument()
})
