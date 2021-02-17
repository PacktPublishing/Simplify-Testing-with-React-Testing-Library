import Cart from './Cart'
import { render, screen, testStore } from './utils/test-utils'

test('Cart, given initial render, displays empty cart', () => {
  render(<Cart />, { initialState: testStore })

  expect(screen.getByText(/0 items/i)).toBeInTheDocument()
  expect(screen.getByText(/\$0\.00/i)).toBeInTheDocument()
})
