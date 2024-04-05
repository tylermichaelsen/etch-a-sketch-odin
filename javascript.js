const pixelGrid = [...Array(16)].map(e => Array(16));
const gridContainer = document.querySelector('.container');

for(let i = 0; i < 15; i++) {
    for(let j = 0; j < 15; j++) {
        pixelGrid[i][j] = document.createElement('div');
    }
}