import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      turn:'x',
        gameEnded:false,
        board:Array(9).fill('')
    }
  }



  clicked(event){

    this.state.board[event.target.datestate.square]= this.state.turn;

   event.target.innerText=this.state.turn;
   this.setState({
       turn:this.state.turn == 'x' ? 'o' :'x',
       board:this.state.board
   })
  }
  render() {
    return (
        <div id="game">
            <div id="head">
              Welcome to Tic Tac Toe API game
            </div>
            <div id="board" onClick={(e)=>this.clicked(e)}>
                <div class="div squears" date-sguare="0" ></div>
                <div class="div squears" date-sguare="1"></div>
                <div class="div squears" date-sguare="2"></div>
                <div class="div squears" date-sguare="3"></div>
                <div class="div squears" date-sguare="4"></div>
                <div class="div squears" date-sguare="5"></div>
                <div class="div squears" date-sguare="6"></div>
                <div class="div squears" date-sguare="7"></div>
                <div class="div squears" date-sguare="8"></div>
            </div>
        </div>


    )
  }
}

export default App;
