import React, {Component} from 'react';
import "./App.css";



class App extends Component {
    constructor() {
        super();
        this.state = {
            winner: undefined,
        };

        this.gameState = {
            turn: 'x',
            gameLocked: false,
            gameEnded: false,
            board: Array(9).fill(''),
            totalMoves: 0
        }
    }

    clicked(box) {
        if (this.gameState.gameEnded || this.gameState.gameLocked)return;

         if (this.gameState.board[box.dataset.square] == ''){
             this.gameState.board[box.datestate.square] = this.gameState.turn;
            box.innerText = this.gameState.turn;

            this.gameState.turn == this.gameState.turn == 'x' ? 'o' : 'x',
            this.gameState.totalMoves++;
            }

        }
        var result = this.checkWinner();

        if (result == 'x') {
            this.gameState.gameEnded =true;
            this.setState({
                winner: 'x',
                winnerLine:"Match won by x",
            });
        }else if (result =='o') {
    this.gameState.gameEnded = true;
    this.setState({
        winner: 'o',
        winnerLine: "Match won by o"
    });
}else if (result =='draw'){
                this.gameState.gameEnded=true;
                this.gameState({
                    winner:'draw',
                    winnerLine:'Match is drawn',
                })
      if (this.gameState.turn == 'o' && !this.gameState.gameEnded){
            this.gameState.gameLocked = true;
            setTimeout(()=>{
                do{
                    var random =Math.floor(Math.random())*9);
                } while(this.gameState.board[random] !='');
                this.gameState.gameLocked = false;
                this.clicked(document.querySelectorAll('.square')[random]);
            },1000);
       }
      }

    checkWinner() {
        var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]]
        var board = this.gameState.board;
        for (let i = 0; i < moves.length; i++) {
            if(board[moves[i][0]] === board[moves [i][1]]&&
                board[moves][i][1] === board[moves][i][2])
            return board[moves[i][0]];
        }
        if(this.gameState.totalMoves === 9){
         return 'draw'
    }
}

render(){
    return (
        <div id="game">
            <div id="status">{this.state.winnerLine}</div>
            <div id="head">
                Welcome to Tic Tac Toe API game
            </div>
            <div id="board" onClick={(e) => this.clicked(e)}>
                <div class="div squear" date-sguare="0"></div>
                <div class="div squear" date-sguare="1"></div>
                <div class="div squear" date-sguare="2"></div>
                <div class="div squear" date-sguare="3"></div>
                <div class="div squear" date-sguare="4"></div>
                <div class="div squear" date-sguare="5"></div>
                <div class="div squear" date-sguare="6"></div>
                <div class="div squear" date-sguare="7"></div>
                <div class="div squear" date-sguare="8"></div>
            </div>
        </div>
    );
  }
}
export default App;
