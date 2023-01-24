import { configureStore } from '@reduxjs/toolkit'
import gridReducer from './gridSlice'
import ordenarReducer from './ordenarSlice'
import productosReducer from './productosSlice'

export default configureStore({
  reducer: {
    grid: gridReducer,
    ordenar:ordenarReducer,
    productos:productosReducer
  }
})
