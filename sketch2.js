const board = document.querySelector('.gridBoard');
const reset = document.querySelector('.reset');
const rand = document.querySelector('.randColor');
let colorInput = document.querySelector('#colorPicker');
let color;



function createGrid(sizeGrid) {
    board.style.gridTemplateColumns = `repeat(${sizeGrid}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${sizeGrid}, 1fr)`;

    for (let i = 0; i < sizeGrid * sizeGrid; i++) {
        let cells = document.createElement('div');
        cells.style.backgroundColor = 'white';
        board.appendChild(cells);
        // rand.addEventListener("click", randomColors);
        cells.addEventListener("mouseover", colorGrid); //only doing things to cell
        cells.addEventListener("mouseover", randomColors);
    }
}

// RGB Selector
// function colorGrid(cells) {
//     cells.addEventListener("mouseenter", e=> {
//         color = colorInput.value;
//         cells.style.backgroundColor = color;
//     } )
// }


function colorGrid() {
    color = colorInput.value;
    this.style.backgroundColor = color;
}

// function randomColors(cells) {
//     cells.addEventListener("mouseenter", e=> {
//         color = `hsl(${Math.random()*360}, 100%, 50%)`;
//         cells.style.backgroundColor = color;
//         console.log(cells);
//     } )
// }

function randomColors() {
    // if button pressed then this
    color = `hsl(${Math.random()*360}, 100%, 50%)`;
    this.style.backgroundColor = color;
}


function resetGrid() {
    
}


function changeSize(input) {
    createGrid(input);
}

createGrid(16);