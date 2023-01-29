import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProductos = createAsyncThunk(
    'productos/fetchProductos',
    async (pageId) => {
        const res = await fetch(`/productos/${pageId}`)
        const response = await res.json()
        // console.log(response)
        return response
})

const initialState = {
    productos: [],
    status: 'idle',
    error: null
} 

export const productosSlice = createSlice({
    name:'productos',
    initialState,
    reducers:{

    },
    extraReducers(builder) {
    builder
      .addCase(fetchProductos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProductos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.productos = state.productos.concat(action.payload)
      })
      .addCase(fetchProductos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllProductos = state => state.productos.productos

export const {small, large} = productosSlice.actions
export default productosSlice.reducer