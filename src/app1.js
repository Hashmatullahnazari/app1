import React from 'react';
import { Link } from 'react-router-dom';
import myImage from './images/lake.png';

export function App1() {
  return (
    <div className="container">
      <div className="column">
        <img src={myImage} alt="Scenic Lake View 1" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
          repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?
        </p>
        <Link className="custom-link" to="/ai">
          Link to Next Page
        </Link>
      </div>
      <div className="column">
        <img src={myImage} alt="Scenic Lake View 2" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
          repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?
        </p>
        <Link className="custom-link" to="/ai">
          Link to Next Page
        </Link>
      </div>
      <div className="column">
        <img src={myImage} alt="Scenic Lake View 3" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
          repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?
        </p>
        <Link className="custom-link" to="/ai">
          Link to Next Page
        </Link>
      </div>
    </div>
  );
}
