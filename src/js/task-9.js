const toggleBtn = document.querySelector('.toggle-style');
const box = document.querySelector('.box');

toggleBtn.addEventListener('click', () => {
  box.classList.toggle('active'); // додає або прибирає клас
});
