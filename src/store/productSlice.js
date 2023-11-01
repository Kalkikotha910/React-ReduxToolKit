import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { data: [], status: 'idle' };
// seperate slice created for API calls by usin thunk
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // by direct slice don't know how to handle async operatins. so functin created at below
    // fetchProducts(state, action) {
    //   state.data = action.payload;
  },
  // for async API calls to retrieve status/state
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle';
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('/get/products', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = await data.json();
  return result;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch('https://fakestoreapi.com/products');
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// }
