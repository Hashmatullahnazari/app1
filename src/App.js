import logo from './logo.svg';
import myImage from './images/lake.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="column">
      <img src={myImage} alt="My Image" />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
           repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?</p>
      </div>
      <div className="column">
      <img src={myImage} alt="My Image" />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
           repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?</p>
      </div>
      <div className="column">
      <img src={myImage} alt="My Image" />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quisquam illum laudantium dolorum possimus
           repellendus nam eos, explicabo, reiciendis soluta eius iusto velit. Tempora dolorum fugit temporibus quisquam minima corrupti?</p>
      </div>
    </div>
  );
}

export default App;
