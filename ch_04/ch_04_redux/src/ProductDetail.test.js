import ProductDetail from './ProductDetail'
import { fakeStore, render, screen } from './utils/test-utils'

test('ProductDetail, given initial render, displays Placeholder component', () => {
  render(<ProductDetail />, { initialState: fakeStore })

  expect(
    screen.getByRole('heading', { name: /retail store/i })
  ).toBeInTheDocument()
})
