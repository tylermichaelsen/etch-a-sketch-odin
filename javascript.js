const body = document.querySelector('body');


const defaultPixelGrid = [...Array(16)].map(e => Array(16));
const columns = [];
const gridContainer = document.querySelector('.grid-container');



const newBtn = document.querySelector('.reset');

newBtn.addEventListener('click', (event) => {
    for(let i = 0; i < 16; i++ ) {
        for(let j = 0; j < 16; j++) {
            defaultPixelGrid[i][j].style.backgroundColor = 'white';
        }
    }
    let gridSize = prompt('Please enter a single number for new grid size (n*n)');
})

for(let i = 0; i < 16; i++) {
    columns[i] = document.createElement('div')
    columns[i].classList.add('col')
    for(let j = 0; j < 16; j++) {
        defaultPixelGrid[i][j] = document.createElement('div');
        defaultPixelGrid[i][j].classList.add('pixel')

        defaultPixelGrid[i][j].textContent = "yo";

        defaultPixelGrid[i][j].addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black';
        });
        
        gridContainer.appendChild(columns[i]);
        columns[i].appendChild(defaultPixelGrid[i][j]);
    }
}

