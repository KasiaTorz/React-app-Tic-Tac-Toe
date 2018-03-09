import React, { Component } from 'react';
import './App.css';

class App extends Component {
  clicked(event){
    console.log(event.target);
  }
  render() {
    return (
        <div id="game">
            <div id="head">
              Welcome to Tic Tac Toe API game
            </div>
            <div id="board" onClick={(e)=>this.clicked(e)}>
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
