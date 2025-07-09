const squareBtn = document.querySelector('.create-square');
const squareContainer = document.querySelector('.square-container');

squareBtn.addEventListener('click', () => {
  const square = document.createElement('div');
  square.classList.add('square'); // Додаємо клас, щоб спрацював :hover
  square.style.backgroundColor = getRandomColor();
  squareContainer.append(square);
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
