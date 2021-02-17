import { render, screen } from '@testing-library/react'
import testProducts from './mocks/testProducts'
import ProductList from './ProductList'
import { RetailProvider } from './RetailContext'

test('Integration: ProductList, given initial render, all products displayed', () => {
  render(
    <RetailProvider products={testProducts}>
      <ProductList />
    </RetailProvider>
  )

  const actual = screen
    .getAllByTestId('product-title')
    .map(product => product.textContent)
  const expected = testProducts.map(product => product.title)

  expect(actual).toEqual(expected)
})
