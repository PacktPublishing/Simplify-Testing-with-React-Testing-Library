import ProductList from './ProductList'
import { fakeStore, render, screen } from './utils/test-utils'

test('ProductList, given initial render, displays all products', () => {
  render(<ProductList />, { initialState: fakeStore })

  const actual = screen
    .getAllByTestId('product-title')
    .map(product => product.textContent)
  const expected = fakeStore.retail.products.map(product => product.title)

  expect(actual).toEqual(expected)
})
