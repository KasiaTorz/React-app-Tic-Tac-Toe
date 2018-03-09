import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div id="game">
            <div id="head">
              Welcome to Tic Tac Toe API game
            </div>
            <div id="board">
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
                <div class="div squears"></div>
            </div>
        </div>


    )
  }
}

export default App;
