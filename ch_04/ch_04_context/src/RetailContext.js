import * as React from 'react'

const RetailContext = React.createContext()

function RetailProvider(props) {
  const retailReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_DETAILS':
        return {
          ...state,
          showProductDetails: state.products.find(
            product => product.id === action.id
          )
        }
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter(item => item.id !== action.product.id),
            {
              id: action.product.id,
              title: action.product.title,
              price: action.product.price,
              quantity: action.quantity
            }
          ]
        }
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favorites: [...state.favorites, action.productId]
        }

      default:
        return state
    }
  }
  const initialState = {
    products: props.products,
    cartItems: [],
    favorites: [],
    showProductDetails: null
  }
  const [state, dispatch] = React.useReducer(retailReducer, initialState)

  const value = [state, dispatch]

  return <RetailContext.Provider value={value} {...props} />
}

function useRetail() {
  const context = React.useContext(RetailContext)

  if (!context) {
    throw new Error('useRetail must be used within the RetailProvider')
  }
  const [state, dispatch] = context

  const getDetails = productId => {
    dispatch({ type: 'SHOW_DETAILS', id: productId })
  }

  const addToCart = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', product, quantity: quantity })
  }

  const addToFavorites = productId => {
    dispatch({ type: 'ADD_TO_FAVORITES', productId })
  }

  return { state, getDetails, addToCart, addToFavorites }
}

export { RetailProvider, useRetail }
