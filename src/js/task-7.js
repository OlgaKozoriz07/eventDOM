const input = document.querySelector('.task-input');
const button = document.querySelector('.add-btn');
const list = document.querySelector('.task-list');
const removeBtn = document.querySelector('.remove-btn');

button.addEventListener('click', () => {
  const task = input.value.trim(); // беремо текст задачі

  // Перевіряємо: чи є щось введене (щоб не додавати порожні задачі)
  if (task !== '') {
    // Створюємо новий елемент списку <li>
    const li = document.createElement('li');

    // Записуємо в нього текст, який ввів користувач
    li.textContent = task; // вставляємо текст задачі

    //  Додаємо цей новий <li> в кінець списку <ul>
    list.append(li);

    // Очищаємо інпут, щоб можна було вводити нову задачу
    input.value = '';
  }
});

removeBtn.addEventListener('click', () => {
  const lastTask = list.lastElementChild; // останній <li>
  if (lastTask) {
    lastTask.remove(); // видаляємо
  }
});
