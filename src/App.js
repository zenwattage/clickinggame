import React from 'react';
import Jumbotron from "./components/Jumbotron";
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
       
       <Jumbotron />
        
          <Button variant="contained" color="primary">
            Clicky Clackity
          </Button>
        
  </div>
  );
}



export default App;
