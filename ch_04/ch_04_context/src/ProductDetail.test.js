import { render, screen } from '@testing-library/react'
import testProducts from './mocks/testProducts'
import ProductDetail from './ProductDetail'
import { RetailProvider } from './RetailContext'

test('ProductDetail, given initial render, displays Placeholder component', () => {
  render(
    <RetailProvider products={testProducts}>
      <ProductDetail />
    </RetailProvider>
  )

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument()
})
