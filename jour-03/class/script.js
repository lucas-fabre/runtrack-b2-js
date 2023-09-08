import * as Player from './Player.js';
import * as Board from './Board.js';

function initializeBoard(){
    document.getElementById("board").innerHTML = Board.initializeBoard();
}

Board.displayBoard();