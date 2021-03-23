import { render, screen } from '@testing-library/react'
import fakeProducts from './mocks/fakeProducts'
import ProductList from './ProductList'
import { RetailProvider } from './RetailContext'

test('Integration: ProductList, given initial render, all products displayed', () => {
  render(
    <RetailProvider products={fakeProducts}>
      <ProductList />
    </RetailProvider>
  )

  const actual = screen
    .getAllByTestId('product-title')
    .map(product => product.textContent)
  const expected = fakeProducts.map(product => product.title)

  expect(actual).toEqual(expected)
})
