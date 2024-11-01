import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Ensure this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Ensure BrowserRouter wraps the App */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
