import { render, screen } from '@testing-library/react'
import Cart from './Cart'
import fakeProducts from './mocks/fakeProducts'
import { RetailProvider } from './RetailContext'

test('Cart, given initial render, returns empty cart', () => {
  render(
    <RetailProvider products={fakeProducts}>
      <Cart />
    </RetailProvider>
  )

  expect(screen.getByText(/0 items/i)).toBeInTheDocument()
  expect(screen.getByText(/\$0\.00/i)).toBeInTheDocument()
})
