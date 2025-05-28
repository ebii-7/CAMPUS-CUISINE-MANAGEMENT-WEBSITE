import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './UiSlice';  // ✅ Ensure correct import
import cartReducer from './CartSlice';  // ✅ Ensure correct import

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
