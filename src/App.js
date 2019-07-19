import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";

import Card from "./components/Card";
import Header from "./components/Header";
import photos from "./photos.json";
import './App.css';
const log = console.log;

class App extends Component {

  state = {
    photos,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        log(this.state.highscore);
      });
    }
    this.state.photos.forEach(photo => {
      photo.count = 0;
    });
    alert(`Game Over :( \n score: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.photos.find((o, i) => {
      if (o.id === id) {
        if (photos[i].count === 0) {
          photos[i].count = photos[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            log(this.state.score);
          });
          this.state.photos.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.photos.map(photo => (
          <Card
            clickCount={this.clickCount}
            id={photo.id}
            key={photo.id}
            image={photo.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;