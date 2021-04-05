import { render, screen } from '@testing-library/react'
import fakeProducts from './mocks/fakeProducts'
import ProductDetail from './ProductDetail'
import { RetailProvider } from './RetailContext'

test('ProductDetail, given initial render, displays Placeholder component', () => {
  render(
    <RetailProvider products={fakeProducts}>
      <ProductDetail />
    </RetailProvider>
  )

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument()
})
