// src/Pages/DetailsPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsPageData } from '../Components/DetailsSlice'; // Corrected the import path

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.details);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchDetailsPageData(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Details Page</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && (
        <div>
          <p>Details for Emoji with ID: {id}</p>
          {/* Render your details using the 'data' from the state */}
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
