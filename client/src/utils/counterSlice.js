import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState : [],
  reducers: {
    increment: (state, action) => {
      const  id  = action.payload;
      const productIndex = state.findIndex(p => p.id === id);
      state[productIndex].value += 1;
    },
    decrement: (state, action) => {
      const  id  = action.payload;
      const productIndex = state.findIndex(p => p.id === id);
      if (state[productIndex].value > 1) {
        state[productIndex].value -= 1;
      }
    },
    todoAdded:(state, action) => {
      const productos = action.payload;
      state.push(productos)
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export const selectProduct = (state, id) => state.counter.productos.find(p => p.id === id);
export const selectCount = (state, id) => {
  if (!state || !state.counter || !state.counter.productos) return 0;
  const product = state.counter.productos.find(p => p.id === id);
  return product ? product.value : 0;
}
export default counterSlice.reducer;
