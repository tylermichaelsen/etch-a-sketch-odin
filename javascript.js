const body = document.querySelector('body');

const pixelGrid = [...Array(16)].map(e => Array(16));
const columns = [];
const gridContainer = document.querySelector('.grid-container');

let gridSize = 16;

const newBtn = document.querySelector('.reset');

newBtn.addEventListener('click', (event) => {
    gridSize = prompt('Please enter a single number for new grid size (n*n)');
    
})


for(let i = 0; i < gridSize; i++) {
    columns[i] = document.createElement('div')
    columns[i].classList.add('col')
    for(let j = 0; j < gridSize; j++) {
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

