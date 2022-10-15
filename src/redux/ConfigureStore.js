import { configureStore } from '@reduxjs/toolkit';
import detailSlice from './Details/Details';
import coinReducer from './HomePage/HomePage';

const store = configureStore({
  reducer: {
    coins: coinReducer,
    details: detailSlice,
  },

});

export default store;
