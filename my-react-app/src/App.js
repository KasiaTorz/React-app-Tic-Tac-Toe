import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            turn: 'x',
            gameEnded: false,
            winner: undefined,
            board: Array(9).fill(''),
            totalMoves: 0
        }
    }

    clicked(event) {
        if (this.state.board[event.target.datestate.square] == '') {
            this.state.board[event.target.datestate.square] = this.state.turn;
            event.target.innerText = this.state.turn;
            this.setState({
                turn: this.state.turn == 'x' ? 'o' : 'x',
                board: this.state.board,
                totalMoves: this.state.totalMoves++
            })
        }
        var result = this.checkWinner();
        if (result == 'x') {
            this.setState({
                gameEnded: true,
                winner: 'x'
            });
        } else if (result == 'o') {
            this.setState({
                gameEnded: true,
                winner: 'x',
            });
        }
    }

    checkWinner() {
        var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]]
        var board = this.state.board;
        for (let i = 0; i < moves.length; i++) {
            if (board[moves [i][0]] == board[moves [i][1]] &&
                board[moves][i][1] == board[moves][i][2]]
        )
            return board[move [i] [0]];
        }
    }
}

render()
{
    return (
        <div id="game">
            <div id="head">
                Welcome to Tic Tac Toe API game
            </div>
            <div id="board" onClick={(e) => this.clicked(e)}>
                <div class="div squears" date-sguare="0"></div>
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
