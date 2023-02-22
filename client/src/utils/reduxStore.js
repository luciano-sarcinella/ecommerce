import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import gridReducer from './gridSlice'
import carritoReducer from './carritoSlice'
import favoritoReducer from './favoritoSlice'

export default configureStore({
  reducer: {
    grid: gridReducer,
    carrito: carritoReducer,
    favorito:favoritoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})
