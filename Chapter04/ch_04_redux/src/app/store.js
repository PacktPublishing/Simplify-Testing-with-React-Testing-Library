import { configureStore } from '@reduxjs/toolkit'
import retailReducer from '../retailSlice'

export default configureStore({
  reducer: {
    retail: retailReducer
  }
})
