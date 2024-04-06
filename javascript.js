const body = document.querySelector('body');

const gridContainer = document.querySelector('.grid-container');

let gridSize = 16;

const pixelGrid = [];
for(let i = 0; i < gridSize; i++) {
    pixelGrid[i] = [];
    for(let j = 0; j < gridSize; j++) {
        pixelGrid[i][j] = j;
    }
}