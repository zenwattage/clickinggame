import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Button from '@material-ui/core/Button';
import photo from "./photo.json";
import './App.css';
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    photo,
    clickedPhoto: [],
    score: 0,
    highscore: 0
  };
}

  //image click even handler
  imageClick = event => {
    let currentHighScore = this.state.highscore;
    const currentPhoto = event.target;
    const clickedPhotos = this.state.clickedPhoto.indexOf(currentPhoto);

    if(clickedPhotos) {
      if(this.state.score > currentHighScore) {
        currentHighScore = this.state.score
      } this.setState({
        photo: this.state.photo.sort(function(a , b) {
          return 0.5 - Math.random();
        }),
        highscore: currentHighScore,
        clickedPhoto: [],
        score: 0
      });
        alert("You lose! Try again");
    } else {
      this.setState(
        {
          photo: this.state.photo.sort(function(a,b) {
            return 0.5 - Math.random();
          }),
          clickedPhoto: this.state.clickedPhoto.concat(
            currentPhoto
          ),
          score: this.state.score + 1,
        },

        () => {
          if(this.state.score === 9) {
            alert("You win!");
            this.setState({
              photo: this.state.photo.sort(function(a,b) {
                return 0.5 - Math.random();
              }),
              clickedPhoto: [],
              score: 0,
              highscore: 0
            });
          }
        }
      );
    }
};

  render() {
    return (
      <div>
        <Jumbotron 
          score={this.state.score}
          highscore={this.state.highscore}
          />
          <Button> Here we go!</Button>

        <div className="wrapper">

        {this.state.photo.map(photo => (
          < Card
            imageClick = {this.imageClick}
            id={photo.id}
            key={photo.id}
            photo={photo.image}
            />
        ))}

      </div>
    </div>
    );
  }
}

export default App;
