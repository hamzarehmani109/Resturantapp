import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'; // Import StrictMode

// Importing the Bootstrap CSS file is not necessary here because you are already importing it in the main file (index.js) using 'import '../node_modules/bootstrap/dist/css/bootstrap.min.css';'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
