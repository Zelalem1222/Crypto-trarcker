import { configureStore } from '@reduxjs/toolkit';
import detailSlice from './Details/Details';
import leagueReducer from './HomePage/HomePage';

const store = configureStore({
  reducer: {
    leagues: leagueReducer,
    details: detailSlice,
  },

});

export default store;
