import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'API/api';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedBaseCurrency = state.baseCurrency;

    if (persistedBaseCurrency) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
