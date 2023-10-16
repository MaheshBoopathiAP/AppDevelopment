import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import messageReducer from '../slices/message';
import productsSlice from '../slices/product';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  products: productsSlice,
  
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
