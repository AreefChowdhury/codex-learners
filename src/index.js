import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import './index.css';  // Optional: Global CSS
import App from './App'; // Main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import React Router

// Create a root and render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Find the root div

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
