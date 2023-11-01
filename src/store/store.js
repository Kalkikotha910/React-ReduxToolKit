import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productSlice';

const store = configureStore({
  // has inbuilt reduxdevtoolextension, thunk middleware is bydefault
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});
export default store;
