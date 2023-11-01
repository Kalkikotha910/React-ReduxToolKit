import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
// slice is a seperate feature
// api calls should not handled here
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      // here state can be mutatable, behind scenes immer.js immutattes state.
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
