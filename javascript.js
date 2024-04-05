const pixelGrid = [...Array(16)].map(e => Array(16));
const columns = [];
const gridContainer = document.querySelector('.grid-container');

const newBtn = document.createElement('button');
newBtn.textContent = 'New'

for(let i = 0; i < 15; i++) {
    columns[i] = document.createElement('div')
    columns[i].classList.add('col')
    for(let j = 0; j < 15; j++) {
        pixelGrid[i][j] = document.createElement('div');
        pixelGrid[i][j].classList.add('pixel')

        pixelGrid[i][j].textContent = "yo";

        const pixels = document.querySelectorAll('.pixel');

        pixelGrid[i][j].addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black';
        });
        
        gridContainer.appendChild(columns[i]);
        columns[i].appendChild(pixelGrid[i][j]);
    }
}