// 1. Знаходимо кнопку за класом
const button = document.querySelector('.color-btn');

// 2. Знаходимо блок, у якого будемо змінювати колір
const block = document.querySelector('.color-block');

// 3. Створюємо функцію, яка генерує випадковий колір у форматі rgb(...)
//0 - 255 — це повний набір значень, який може мати кожен із 3 кольорів.
//Всі кольори на екрані — це мікси трьох чисел у цьому діапазоні.
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r},${b},${g})`; // повертає рядок типу: "rgb(123,45,67)"
}

// 4. Коли натискаємо кнопку — виконується ця функція
button.addEventListener('click', () => {
  const randomColor = getRandomColor(); // Отримуємо випадковий колір
  block.style.backgroundColor = randomColor; // Задаємо його як фон блоку
});
