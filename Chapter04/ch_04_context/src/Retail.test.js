import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { ErrorBoundary } from 'react-error-boundary'
import fakeProducts from './mocks/fakeProducts'
import Retail from './Retail'
import { RetailProvider } from './RetailContext'

test('Retail must be rendered within Context Provider', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  const ErrorFallback = ({ error }) => error.message

  render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Retail />
    </ErrorBoundary>
  )
  const errorMessage = screen.getByText(
    /must be used within the RetailProvider/i
  )
  expect(errorMessage).toBeInTheDocument()

  expect(console.error).toHaveBeenCalled()
  console.error.mockRestore()
})

describe('Integration: Product Details', () => {
  function addFirstItemToCart() {
    const firstProduct = fakeProducts[1]
    const firstProductTitle = screen.getByRole('heading', {
      name: firstProduct.title
    })

    user.click(firstProductTitle)
    user.click(screen.getByRole('button', { name: /add to cart/i }))
  }

  test('A user can view product details', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <Retail />
      </RetailProvider>
    )
    const firstProduct = fakeProducts[0]

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

  test('A user can add a product to the cart', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <Retail />
      </RetailProvider>
    )
    addFirstItemToCart()

    expect(screen.getByText(/1 items/i)).toBeInTheDocument()
  })

  test('A user can update the quantity for cart items', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <Retail />
      </RetailProvider>
    )
    addFirstItemToCart()
    const quantityInput = screen.getByRole('spinbutton')
    user.clear(quantityInput)
    user.type(quantityInput, '10')
    user.click(screen.getByRole('button', { name: /add to cart/i }))

    expect(screen.getByText(/qty:10/i)).toBeInTheDocument()
  })

  test('A user cannot submit a quantity greater than 10', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <Retail />
      </RetailProvider>
    )
    addFirstItemToCart()
    const quantityInput = screen.getByRole('spinbutton')
    user.clear(quantityInput)
    user.type(quantityInput, '11')
    user.click(screen.getByRole('button', { name: /add to cart/i }))

    expect(screen.getByText(/qty:1/i)).toBeInTheDocument()
  })

  test('A user cannot submit a quantity less than 1', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <Retail />
      </RetailProvider>
    )
    addFirstItemToCart()
    const quantityInput = screen.getByRole('spinbutton')
    user.clear(quantityInput)
    user.type(quantityInput, '0')
    user.click(screen.getByRole('button', { name: /add to cart/i }))

    expect(screen.getByText(/qty:1/i)).toBeInTheDocument()
  })

  test('A user can add an item to favorites', () => {
    render(
      <RetailProvider products={fakeProducts}>
        <Retail />
      </RetailProvider>
    )

    const firstProduct = fakeProducts[1]
    const firstProductTitle = screen.getByRole('heading', {
      name: firstProduct.title
    })
    user.click(firstProductTitle)

    user.click(screen.getByRole('button', { name: /add to favorites/i }))

    expect(
      screen.getByRole('button', { name: /added to favorites/i })
    ).toBeInTheDocument()
  })
})
