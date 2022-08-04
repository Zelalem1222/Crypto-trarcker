import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-football-standings.azharimm.site/leagues';

export const fetchLeagues = createAsyncThunk(
  'leagues/fetchLeagues',
  async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const teams = data.data.map((team, i) => ({
      id: team.id,
      name: team.name,
      logo: team.logos.dark,
      index: i,
    }));
    return teams;
  },
);

const data = {
  name: 'leagues',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchLeagues.fulfilled]: (state, action) => action.payload,
  },
};

const leagueSlice = createSlice(data);

export default leagueSlice.reducer;
