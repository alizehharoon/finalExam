// src/Pages/HomePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmojiData } from '../Components/HomeSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { emojis, status, error } = useSelector((state) => state.home);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchEmojiData());
  }, [dispatch]);

  // Log the state values to the console
  console.log({ emojis, status, error });

  return (
    <div>
      <h1>Home Page</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {emojis.map((emoji) => (
        <div key={emoji.id}>{emoji.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
