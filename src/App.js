import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>

        <p>
            <small>
              <a href='https://github.com/asudbury/react-hello-world' target="_blank" rel="noopener noreferrer">Source Code</a>
            </small>
        </p>
        <p>
            <small>
              By Adrian Sudbury
            </small>
        </p>
      </header>
    </div>
  );
}

export default App;
