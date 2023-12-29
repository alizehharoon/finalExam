
import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from '../Components/DetailsSlice';
import homeReducer from '../redux/emojiSlice';

const store = configureStore({
  reducer: {
    details: detailsReducer,
    home: homeReducer,
  },

});

export default store;
