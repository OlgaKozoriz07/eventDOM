// Знаходимо кнопку в HTML по її id
const button = document.getElementById('clickButton');

// Створюємо змінну, яка буде відстежувати — чи вже натискали
let clickedOnce = false;

// Коли користувач натискає кнопку:
// синтаксис обробника події ('click', () => {})
button.addEventListener('click', () => {
  // Якщо це перший клік:
  if (!clickedOnce) {
    console.log('Кнопка натиснута!'); // Виводимо повідомлення в консоль
    // Змінюємо стан: тепер кнопка вже натискалась
    clickedOnce = true;
  } else {
    // Якщо кнопка вже натискалась — змінюємо текст
    button.textContent = 'Ще раз?';
  }
});
