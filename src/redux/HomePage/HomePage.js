/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.coinstats.app/public/v1/coins/';

export const fetchCoins = createAsyncThunk(
  'coins/fetchCoins',
  async () => {
    const response = await fetch(BASE_URL);
    
    const data = await response.json();
    const coins = data.coins.map((coin, i) => ({
      id: coin.id,
      name: coin.name,
      logo: coin.icon,
      index: i,
    }));
    return coins;
  },
);

const data = {
  name: 'coins',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => action.payload,
  },
};

const coinSlice = createSlice(data);

export default coinSlice.reducer;
