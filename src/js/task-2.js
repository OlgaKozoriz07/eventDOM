const btn = document.getElementById('incrementBtn');
const counter = document.getElementById('counter');

//створюємо змінну для лічильника
let count = 0;

//вішаємо оброник подій на кнопку
btn.addEventListener('click', () => {
  count++; //збільшуємо значення
  counter.textContent = count; //оновлюємо текст в <p></p>
});
