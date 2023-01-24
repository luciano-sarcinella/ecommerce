import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    productos: [],
    status: 'idle',
    error: null
}
export const productosSlice = createSlice({
    name:'productos',
    initialState,
    reducers:{
    }
})

export const fetchProductos = createAsyncThunk('productos/fetchProductos', async (pageId) => {
    const res = await fetch(`/productos/${pageId}`)
    const response = res.json();
    console.log(response);
    return response
})


export const selectAllProductos = state => state.productos

export const {small, large} = productosSlice.actions
export default productosSlice.reducer