import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
// import counterReducer from './counterSlice'
import gridReducer from './gridSlice'
import carritoReducer from './carritoSlice'

export default configureStore({
  reducer: {
    grid: gridReducer,
    carrito: carritoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})
