const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;
let gameState = Array(9).fill("");

const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], //colmuns
    [0,4,8], [2,4,6] //diagonals
];

//Inialize Board Game
function createBoard() {
    board.innerHTML = "";
    gameState = Array(9).fill("");
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        board.appendChild(cell);
    }
    updateStatus();
}

createBoard();

//Handle Moves





