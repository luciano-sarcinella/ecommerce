import { createSlice } from '@reduxjs/toolkit'

export const ordenarSlice = createSlice({
    name:'ordenar',
    initialState: {value: []},
    reducers:{
        getProductos: (state, action) => {
            state.value = action.payload
        },
        popularidad: state=>{state = state.slice().sort((a,b)=>a.precio.localeCompare(b.precio))},
        menor: state=>{state.value = state.value.sort((a, b) => a.precio - b.precio)},
        mayor: state=>{state.value.large = !state.value.large},
        selectProductosValue: state =>{
            return state.value
        }
    }
})





export const {popularidad, menor, mayor,getProductos,selectProductosValue } = ordenarSlice.actions
export default ordenarSlice.reducer