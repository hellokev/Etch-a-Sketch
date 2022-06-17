const board = document.querySelector('.gridBoard');
const reset = document.querySelector('.reset');
const rand = document.querySelector('button');
let colorInput = document.querySelector('#colorPicker');
let color;



function createGrid(sizeGrid) {
    board.style.gridTemplateColumns = `repeat(${sizeGrid}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${sizeGrid}, 1fr)`;

    for (let i = 0; i < sizeGrid * sizeGrid; i++) {
        let cells = document.createElement('div');
        cells.style.backgroundColor = 'white';
        board.appendChild(cells);
        rand.addEventListener("click", () => randomColors(cells));
        colorInput.addEventListener("click", ()=> colorGrid(cells)); //only doing things to cell
    }
}

// RGB Selector
function colorGrid(cells) {
    cells.addEventListener("mouseover", ()=> {
        color = colorInput.value;
        cells.style.backgroundColor = color;
    })
}

// Random Color Trail
function randomColors(cells) {
    cells.addEventListener("mouseover", ()=> {    
        color = `hsl(${Math.random()*360}, 100%, 50%)`;
        cells.style.backgroundColor = color; 
    })
}



function resetGrid() {
    
}


function changeSize(input) {
    createGrid(input);
}

createGrid(16);

