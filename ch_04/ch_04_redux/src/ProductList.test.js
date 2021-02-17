import ProductList from './ProductList'
import { render, screen, testStore } from './utils/test-utils'

test('ProductList, given initial render, displays all products', () => {
  render(<ProductList />, { initialState: testStore })

  const actual = screen
    .getAllByTestId('product-title')
    .map(product => product.textContent)
  const expected = testStore.retail.products.map(product => product.title)

  expect(actual).toEqual(expected)
})
