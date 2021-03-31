const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset-button');

for (let i = 0; i < 256; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);
}

const grids = document.querySelectorAll('.grid');
console.log(grids);
grids.forEach((grid) => grid.addEventListener('mouseover', hover));
resetButton.addEventListener('click', reset);

function hover(e) {
  e.target.style.backgroundColor = getNewColor();
}

function reset() {
  grids.forEach((grid) => (grid.style.backgroundColor = 'white'));
  let squares = parseInt(prompt('How many squares do you want?'));

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  document.documentElement.style.setProperty('--column-rows', squares);

  for (let i = 0; i < squares * squares; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
  }
  const newGrids = document.querySelectorAll('.grid');
  newGrids.forEach((grid) => grid.addEventListener('mouseover', hover));
}

function getNewColor() {
  let symbols, color;
  symbols = '0123456789ABCDEF';

  color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16) + 0];
  }
  return color;
}
