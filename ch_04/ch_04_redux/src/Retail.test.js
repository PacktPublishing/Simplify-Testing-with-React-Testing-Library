import user from '@testing-library/user-event'
import Retail from './Retail'
import { fakeStore, render, screen } from './utils/test-utils'

describe('Integration: Retail', () => {
  function addFirstItemToCart() {
    const firstProduct = fakeStore.retail.products[0]
    const firstProductTitle = screen.getByRole('heading', {
      name: firstProduct.title
    })

    user.click(firstProductTitle)
    user.click(screen.getByRole('button', { name: /add to cart/i }))
  }
  describe('ProductDetails', () => {
    test('given selected product, details displayed', () => {
      render(<Retail />, { initialState: fakeStore })

      const firstProduct = fakeStore.retail.products[0]

      user.click(
        screen.getByRole('heading', {
          name: firstProduct.title
        })
      )

      expect(
        screen.getAllByRole('heading', { name: firstProduct.title }).length
      ).toEqual(2)
      expect(screen.getByText(firstProduct.description)).toBeInTheDocument()
      expect(
        screen.getByRole('heading', { name: `$${firstProduct.price}` })
      ).toBeInTheDocument()
    })

    test('given selected add to favorites, product added to favorites', () => {
      render(<Retail />, { initialState: fakeStore })

      const firstProduct = fakeStore.retail.products[0]

      user.click(
        screen.getByRole('heading', {
          name: firstProduct.title
        })
      )

      user.click(screen.getByRole('button', { name: /add to favorites/i }))

      expect(
        screen.getByRole('button', { name: /added to favorites/i })
      ).toBeInTheDocument()
    })
  })

  describe('Cart', () => {
    test('given selected add to cart, product added to cart', () => {
      render(<Retail />, { initialState: fakeStore })

      addFirstItemToCart()

      expect(screen.getByText(/1 items/i)).toBeInTheDocument()
    })

    test('given new quantity for cart item, quantity updated', () => {
      render(<Retail />, { initialState: fakeStore })
      addFirstItemToCart()
      const quantityInput = screen.getByRole('spinbutton')

      user.clear(quantityInput)
      user.type(quantityInput, '10')
      user.click(screen.getByRole('button', { name: /add to cart/i }))

      expect(screen.getByText(/qty:10/i)).toBeInTheDocument()
    })

    test('given quantity greater than 10, quantity not accepted', () => {
      render(<Retail />, { initialState: fakeStore })
      addFirstItemToCart()
      const quantityInput = screen.getByRole('spinbutton')

      user.clear(quantityInput)
      user.type(quantityInput, '11')
      user.click(screen.getByRole('button', { name: /add to cart/i }))

      expect(screen.getByText(/qty:1/i)).toBeInTheDocument()
    })

    test('given quantity less than 1, quantity not accepted', () => {
      render(<Retail />, { initialState: fakeStore })
      addFirstItemToCart()
      const quantityInput = screen.getByRole('spinbutton')

      user.clear(quantityInput)
      user.type(quantityInput, '0')
      user.click(screen.getByRole('button', { name: /add to cart/i }))

      expect(screen.getByText(/qty:1/i)).toBeInTheDocument()
    })
  })
})
