// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
