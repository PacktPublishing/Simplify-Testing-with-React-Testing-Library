import ProductDetail from './ProductDetail'
import { render, screen, testStore } from './utils/test-utils'

test('ProductDetail, given initial render, displays Placeholder component', () => {
  render(<ProductDetail />, { initialState: testStore })

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument()
})
