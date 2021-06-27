let cells = [];
let cellWidth = 16;
let cellHeight = 16;
let cellCountX = 8;
let cellCountY = 8;
let gridPercent = (100/cellCountX) - 1;
let gridSize = window.innerWidth/(cellCountX*2) - 20;

const grid = document.querySelector('#grid');


window.addEventListener('resize', () => {
  let list = document.getElementsByClassName('cell');
  for (let item of list) {
    gridSize = window.innerWidth/(cellCountX*2) - 20;
    item.style.padding = `${gridSize}px 0`;
    item.style.margin = `${gridSize/21}px 0`;
  }
});

const addCells = (x,y) => {
  for (let j=0; j<y; j++)
    for (let i=0; i<x; i++) 
      cells.push({
        x: i,
        y: j,
        width: cellWidth, 
        height: cellHeight
      });
}

const drawCells = () => {
  cells.forEach(c => {
    const cell = document.createElement('div');
    cell.classList.toggle('cell');
    //cell.textContent = `x: ${c.x}, y: ${c.y}`;
    cell.textContent = `x`;
    
    cell.style.width = `${gridPercent}%`;
    console.log(cell.style.width)
    cell.style.padding = `${gridSize}px 0`;
    cell.style.margin = `${gridSize/21}px 0`;

    grid.appendChild(cell);
  })
}

console.log(gridSize)
addCells(cellCountX,cellCountY);
drawCells();