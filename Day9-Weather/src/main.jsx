import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // This imports the global styles including Tailwind and custom CSS
import App from './App.jsx'; // Main app component

// Create and render the app inside the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
