const input = document.querySelector('.name-input');
const button = document.querySelector('.greet-btn');
const heading = document.querySelector('.greeting-output');

//додаємо дію на клік кнопки
button.addEventListener('click', () => {
  //.value - те шо користувач написав у полі
  //.tim() - оюрізає пробіли спереду і ззаду
  const name = input.value.trim();
  //якшо є імя вітаємо особисто, інакше як гість
  if (name) {
    heading.textContent = `Привіт, ${name}!`;
  } else {
    heading.textContent = 'Привіт, гість!';
  }
});
