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

function drawGrid(size) {
    for(let i = 0; i < size; i++) {
        const columns = [];
        columns[i] = document.createElement('div');
        columns[i].classList.add('col');
        for(let j = 0; j < size; j++) {
            pixelGrid[i][j] = document.createElement('div');
            gridContainer.appendChild(columns[i]);
            columns[i].appendChild(pixelGrid[i][j]);
        }
    }
}

drawGrid(gridSize);