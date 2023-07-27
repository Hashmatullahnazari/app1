import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Ai from './ai.js'; // Keep the imported component as Ai
import { App1 } from './app1'; // Update the filename case
function App() {
  return (
    <Router>
      <Routes>
        {/* Use nested Route components inside Routes */}
        <Route path="/app1" element={<App1 />} /> {/* Render App1 component for the '/app1' path */}
        <Route path="/ai" element={<Ai />} /> {/* Render Ai component for the '/ai' path */}
      </Routes>
    </Router>
  );
}

export default App;
