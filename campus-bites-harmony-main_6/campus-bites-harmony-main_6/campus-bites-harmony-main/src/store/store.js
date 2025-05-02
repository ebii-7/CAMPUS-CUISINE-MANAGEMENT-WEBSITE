
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import cartReducer from './cartSlice';

// Create the store
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer
  }
});

// Define RootState type for TypeScript support
export const RootState = store;
