import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  state = {
    photo,
    clickedPhoto: [],
    score: 0,
    highscore: 0
  };

  //image click even handler
  imageClick = event => {
    let currentHighScore = this.state.highscore;
    const currentPhoto = event.target;
    const clickedPhotos = this.state.clickedPhoto.indexOf(currentPhoto);
  }

}

export default App;
