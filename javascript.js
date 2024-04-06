const body = document.querySelector('body');

let hasReset = false;
let gridSize = 16;

const pixelGrid = [];
const columns = [];
const gridContainer = document.querySelector('.grid-container');

for(let i = 0; i < gridSize; i++) {
    pixelGrid[i] = [];
    for(let j = 0; j < gridSize; j++) {
        pixelGrid[i][j] = j;
    }
}

const newBtn = document.querySelector('.reset');

newBtn.addEventListener('click', (event) => {
    
    drawSketchPad(+prompt('Please enter a number lower than 100'));
    for(let i = 0; i < gridSize; i++ ) {
        for(let j = 0; j < gridSize; j++) {
            pixelGrid[i][j].style.backgroundColor = 'white';
        }
    }
    hasReset = true;
    
})

function drawSketchPad(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        columns[i] = document.createElement('div')
        columns[i].classList.add('col')
        for(let j = 0; j < gridSize; j++) {
            pixelGrid[i][j] = document.createElement('div');
            pixelGrid[i][j].classList.add('pixel')
    
            pixelGrid[i][j].textContent = "yo";
    
            pixelGrid[i][j].addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'black';
            });
            
            gridContainer.appendChild(columns[i]);
            columns[i].appendChild(pixelGrid[i][j]);
        }
    }
}

