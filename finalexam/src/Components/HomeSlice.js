// src/Components/HomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  emojis: [],
  status: 'idle',
  error: null,
};

export const fetchEmojiData = createAsyncThunk(
  'emoji/fetchData',
  async () => {
    try {
      const response = await fetch('https://emojihub.yurace.pro/api/all');
      const data = await response.json();

      // Check if the response is not a JSON (e.g., HTML error page)
      if (!response.ok) {
        throw new Error(data); // Assuming the error message is provided in the response
      }

      return data;
    } catch (error) {
      console.error('Error fetching emoji data:', error.message);
      throw error;
    }
  }
);

const homeSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmojiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmojiData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.emojis = action.payload;
      })
      .addCase(fetchEmojiData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
