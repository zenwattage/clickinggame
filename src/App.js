import React from 'react';
import logo from './logo.svg';

import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" color="primary">
            Clicky Clackity
          </Button>
        </a>
      </header>
  </div>
  );
}

export default App;
