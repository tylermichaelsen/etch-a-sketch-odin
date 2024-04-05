const pixelGrid = [...Array(16)].map(e => Array(16));
const columns = [];
const gridContainer = document.querySelector('.grid-container');

for(let i = 0; i < 15; i++) {
    for(let j = 0; j < 15; j++) {
        columns[j] = document.createElement('div')
        columns[j].classList.add('col')

        pixelGrid[i][j] = document.createElement('div');
        pixelGrid[i][j].classList.add('pixel')

        gridContainer.appendChild(pixelGrid[i][j]);
    }
}