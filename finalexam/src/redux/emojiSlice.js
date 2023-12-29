// emojiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchEmojiData = createAsyncThunk('emoji/fetchEmojiData', async () => {
  const response = await axios.get('https://emojihub.yurace.pro/api/all');
  return response.data;
});

const emojiSlice = createSlice({
  name: 'emoji',
  initialState: {
    emojis: [],
    status: 'idle',
    error: null,
  },
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

export { fetchEmojiData };

export default emojiSlice.reducer;
