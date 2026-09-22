import { Game } from './game.js';



let game;
let interval;




const board = document.querySelector('.game-board');
const createBoard = () => {
    board.innerHTML = "";
    for(let i=0;i < game.rows;i++){
        for(let j = 0;j < game.columns;j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = i;
        cell.dataset.y = j;
        board.appendChild(cell);
        }
    }
}

const Render = () => {
    const cells = board.children; // Get all cells in the board

    // Snake

    game.snake
        .getBody()
        .forEach(
            (segment, index) => {

                const cell = board.querySelector(
                    `[data-x="${segment.x}"][data-y="${segment.y}"]`
                );

                if (!cell) return;

                cell.classList.add(
                    "snake"
                );

                if (index === 0) {

                    cell.classList.add(
                        "head"
                    );

                }

            }
        );



}




const startGame = () => {
    game = new Game();
    createBoard();
    Render();
}
startGame();