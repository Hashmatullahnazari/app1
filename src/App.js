import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Update import statement
import myImage from './images/lake.png';
import './App.css';
import Ai from './ai.js';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="column">
          <img src={myImage} alt="My Image" />
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
            repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?</p>
          <Link className="custom-link" to="/ai">Link to Next Page</Link>
        </div>
        <div className="column">
          <img src={myImage} alt="My Image" />
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
            repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?</p>
            <Link className="custom-link" to="/ai">Link to Next Page</Link>
        </div>
        <div className="column">
          <img src={myImage} alt="My Image" />
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
            repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?</p>
            <Link className="custom-link" to="/ai">Link to Next Page</Link>
        </div>

        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/ai" element={<Ai />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
