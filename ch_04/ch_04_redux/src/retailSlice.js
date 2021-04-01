import { createSlice } from '@reduxjs/toolkit'
import products from './app/products'

export const retailSlice = createSlice({
  name: 'retail store',
  initialState: {
    products: products,
    cartItems: [],
    favorites: [],
    showProductDetails: null
  },
  reducers: {
    showDetails: (state, action) => {
      state.showProductDetails = state.products.find(
        product => product.id === action.payload
      )
    },
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
    },
    addToCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems.filter(item => item.id !== action.payload.id),
        {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: action.payload.quantity
        }
      ]
    }
  }
})

export const { showDetails, addToFavorites, addToCart } = retailSlice.actions

export const selectProducts = state => state.retail.products
export const selectShowProductDetails = state => state.retail.showProductDetails
export const selectFavorites = state => state.retail.favorites
export const selectCartItems = state => state.retail.cartItems

export default retailSlice.reducer
