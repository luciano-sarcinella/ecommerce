import { createSlice } from '@reduxjs/toolkit'

export const gridSlice = createSlice({
    name:'grid',
    initialState: {value:{large:false}},
    reducers:{
        small: (state, action)=>{
            state.value.large = !state.value.large},
        large: state=>{state.value.large = !state.value.large}
    }
})

export const {small, large} = gridSlice.actions
export default gridSlice.reducer

