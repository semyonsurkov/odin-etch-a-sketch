const createGrid = (count) => {
  const container = document.querySelector('.grid__container');

  container.innerHTML = '';

  for (let i = 0; i < count * count; i++) {
    const div = document.createElement('div');
    div.classList.add('grid__cell');
    container.appendChild(div);

    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    });
  }
};

createGrid(16);

const resetGrid = () => {
  const resetButton = document.querySelector('.buttons__reset');
  resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid__cell');
    cells.forEach((cell) => (cell.style.backgroundColor = 'white'));
  });
};
resetGrid();
