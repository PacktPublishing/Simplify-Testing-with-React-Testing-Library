import { configureStore } from '@reduxjs/toolkit'
import { render as rtlRender } from '@testing-library/react'
import faker from 'faker'
import { Provider } from 'react-redux'
import retailReducer from '../retailSlice'

const fakeStore = {
  retail: {
    products: [
      {
        id: faker.random.uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.fashion()
      },
      {
        id: faker.random.uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.fashion()
      }
    ],
    cartItems: [],
    favorites: [],
    showProductDetails: null
  }
}

function render(
  ui,
  {
    initialState,
    store = configureStore({
      reducer: { retail: retailReducer },
      preloadedState: initialState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render, fakeStore }

