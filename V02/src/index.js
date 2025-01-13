import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure your global styles are set here
import App from './App'; // Your main app component
import reportWebVitals from './reportWebVitals'; // For performance tracking (optional)

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root DOM node
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);

// Performance tracking: Uncomment this to measure web vitals
// reportWebVitals(console.log);
