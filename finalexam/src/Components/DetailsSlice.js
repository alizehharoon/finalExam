
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};


export const fetchDetailsPageData = createAsyncThunk(
  'details/fetchData',
  async (category, { dispatch, getState }) => {
    try {

      const response = await fetch(`https://api.example.com/details?category=${category}`);
      const data = await response.json();

      // Return the fetched data
      return data;
    } catch (error) {
      // Handle errors
      console.error('Error fetching details data:', error);
      throw error;
    }
  }
);

// Create a slice for the details data
const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsPageData.pending, (state) => {
        // Set loading state when the data is being fetched
        state.status = 'loading';
      })
      .addCase(fetchDetailsPageData.fulfilled, (state, action) => {
        // Set the data when the fetch is successful
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDetailsPageData.rejected, (state, action) => {
        // Set error state when the fetch is unsuccessful
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default detailsSlice.reducer;
