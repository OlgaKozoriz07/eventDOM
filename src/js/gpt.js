// const text = document.querySelector('.text');
// console.log(text);
// console.log(text.textContent);
// text.innerHTML += '<span>🔥 Вогонь!</span>';
// text.insertAdjacentHTML('beforebegin', '<span>🔥 Вогонь!</span>');
// text.style.color = 'red';

// const button = document.querySelector('.btn');
// console.log(button.classList.contains('btn'));
// button.classList.add('active');
// button.classList.remove('btn');

// button.addEventListener('click', () => {
//   button.classList.toggle('highlight');
//   button.classList.replace('old-style', 'new-style');
// });

// const list = document.querySelector('.list');

// const itemEnd = document.createElement('li');
// itemEnd.textContent = 'Новий елемент(в кінець)';
// list.append(itemEnd);

// const itemStart = document.createElement('li');
// itemStart.textContent = 'Новий елемент(на початок)';
// list.prepend(itemStart);

// if (list.children[1]) {
//   list.children[1].remove();
// }

// list.insertAdjacentHTML('afterend', '<li>Ще один</li>');

// const input = document.querySelector('.name-input');
// input.addEventListener('keydown', () => {
//   console.log('Клавішу натиснуто');
// });

/*=========================================================== */

// const text = document.querySelector('.text');

// const allText = document.querySelectorAll('.text');

// allText.forEach(el => console.log(el.textContent));

// const mainTitle = document.querySelector('.main-title');

// mainTitle.textContent = 'Новий заголовок';
// mainTitle.innerHTML += '<span>🔥</span>';
// mainTitle.style.color = 'red';

// const button = document.querySelector('.btn');
// console.log(button.classList.contains('btn'));

// button.classList.add('active');
// button.classList.remove('btn');

// button.addEventListener('click', () => {
//   button.classList.toggle('highlight');
//   button.classList.replace('old-style', 'new-style');
// });

/*================================================ */

// const mainTitle = document.querySelector('.main-title');
// mainTitle.textContent = 'Новий заголовок!';

// const textAll = document.querySelectorAll('.text');
// textAll.forEach(el => console.log(el.textContent));

// textAll[1].textContent = 'Це оновлений другий абзац';

// const button = document.querySelector('.my-btn');
// button.classList.add('active');
// button.style.color = 'white';
// button.style.backgroundColor = 'blue';
// // setTimeout(() => {
// //   button.classList.remove('active');
// //   button.style.backgroundColor = 'gray';
// // }, 2000);

// button.addEventListener('click', () => {
//   button.classList.toggle('active');
// });

/* 1 варіант */

// const link = document.querySelector('.my-link');
// link.href = 'https://chat.openai.com';
// link.textContent = 'До Чату GPT';

// console.log(link.getAttribute('href'));
// console.log(link.getAttribute('target'));

/* 2 варіант */
// const link = document.querySelector('.my-link');

// link.setAttribute('href', 'https://chat.openai.com');
// link.textContent = 'До Чату GPT';

// console.log('Href:', link.getAttribute('href'));
// console.log('Target:', link.getAttribute('target'));
// link.setAttribute('data-user-id', '42');
// console.log(link.dataset.userId);
// console.log(link.getAttribute('data-user-id'));

// const productBtn = document.querySelector('.product-btn');
// console.log(productBtn.dataset.productId);
// console.log(productBtn.dataset.stock);
// productBtn.dataset.stock = 'no';

// const container = document.querySelector('.content');

// const newParagraph = document.createElement('p');
// newParagraph.textContent = "Привіт! Я  з'явився з JavaScript";
// container.append(newParagraph);
// setTimeout(() => {
//   newParagraph.remove();
// }, 3000);

// const secondTitle = document.querySelector('.title');
// const changeBtn = document.querySelector('.change-btn');

// changeBtn.addEventListener('click', () => {
//   if (secondTitle.textContent === 'Привіт!') {
//     secondTitle.textContent = 'Як справи?';
//     secondTitle.style.color = 'blue';
//   } else {
//     secondTitle.textContent = 'Привіт!';
//     secondTitle.style.color = 'green';
//   }
// });

// const thirdBtn = document.querySelector('.add-btn');

// const containerSecond = document.querySelector('.output');
// // let count = 1;

// thirdBtn.addEventListener('click', () => {
//   const p = document.createElement('p');
//   p.textContent = `Це абзац №${count}`;
//   p.classList.add('paragraph');
//   containerSecond.append(p);
//   setTimeout(() => {
//     p.remove();
//   }, 5000);
//   count += 1;
// });

/*========================================================== */

// const list = document.querySelector('.list');
// const itemHTML = '<li class="item">Новий пункт списку</li>';

// list.insertAdjacentHTML('beforeend', itemHTML);

// const pressMe = document.querySelector('.count-btn');
// const result = document.querySelector('.result');

// let count = 0;
// pressMe.addEventListener('click', () => {
//   count += 1;
//   result.textContent = `${count}`;
// });

/*=================================================== */
// const textInput = document.querySelector('.mirror-input');
// const textOutput = document.querySelector('.mirror-output');

// // textInput.addEventListener('input', event => {
// //   textOutput.textContent = event.target.value;
// // });

// textInput.addEventListener('input', () => {
//   textOutput.textContent = textInput.value;
// });

/*============================================== */
// const form = document.querySelector('.greeting-form');
// const p = document.querySelector('.greeting-output');

// // Створюємо функцію-обробник форми
// const onFormSubmit = event => {
//   // Зупиняємо стандартну поведінку (не оновлюємо сторінку)
//   event.preventDefault();

//   // Зчитуємо значення з поля імя
//   const username = form.elements.username.value;
//   p.textContent = `Привіт, ${username}!`; // Виводимо привітання
// };

// // Вішаємо обробник на подію submit
// form.addEventListener('submit', onFormSubmit);

/*==================================================== */

// const button = document.querySelector('.change-text');
// const p = document.querySelector('.text');

// button.addEventListener('click', () => {
//   p.textContent = 'Оля вже DOM-queen 👑';
// });

/*==================================================== */

// const input = document.querySelector('.mirror-input');
// const output = document.querySelector('.mirror-output');

// input.addEventListener('input', event => {
//   output.textContent = event.target.value;
// });

/*========================================================= */

// const btn = document.querySelector('.toggle-btn');
// const container = document.querySelector('.box');

// btn.addEventListener('click', () => {
//   container.classList.toggle('active');
// });

/*========================================================= */

// const button = document.querySelector('.theme-toggle');
// const block = document.querySelector('.page');

// button.addEventListener('click', () => {
//   block.classList.toggle('dark');
//   console.log(
//     block.classList.contains('dark')
//       ? 'Темна тема активна'
//       : 'Світла тема активна'
//   );
// });

// button.addEventListener('click', () => {
//   if (block.classList.contains('dark')) {
//     block.classList.remove('dark');
//     console.log('Світла тема активна');
//   } else {
//     block.classList.add('dark');
//     console.log('Темна тема активна');
//   }
// });

/*================================================== */

// const btn = document.querySelector('.add-btn');
// const container = document.querySelector('.output');
// const clearBtn = document.querySelector('.clear-btn');

// //Функція для випадкового кольору
// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }
// let count = 1;

// btn.addEventListener('click', () => {
//   const p = document.createElement('p'); // створюємо новий <p>
//   p.style.color = getRandomColor(); // колір

//   p.addEventListener('click', () => {
//     p.remove(); // прибираємо при кліку на абзац
//   });
//   p.textContent = `Це абзац №${count}`; // текст всередині
//   container.append(p); // додаємо на сторінку
//   count += 1; // +1 до лічильника
//   if (count > 5) {
//     btn.disabled = true; // вимикаємо кнопку після 5-го
//   }
// });

// //Реакція на кнопку "Очистити"
// clearBtn.addEventListener('click', () => {
//   container.innerHTML = ''; // очищаємо вміст контейнера
//   count = 1; // скидаємо рахунок
//   btn.disabled = false; // вмикаємо кнопку назад
// });

/*======================================================= */

// const button = document.querySelector('.like-btn');
// const span = document.querySelector('.likes');
// const clear = document.querySelector('.clear-btn');
// const message = document.querySelector('.message');

// let likes = 0;

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// button.addEventListener('click', () => {
//   button.style.color = getRandomColor();
//   //збільшуємо лайки на 1
//   likes += 1;
//   span.textContent = `${likes}`; //виводимо в спан

//   if (likes > 10) {
//     message.textContent = 'Тобі дуже сподобалось!';
//   } else {
//     message.textContent = '';
//   }
// });

// clear.addEventListener('click', () => {
//     span.textContent = '0'; // очищаємо вміст контейнера
//     //а тут робимо кнопку неактивною якшо лайків 0
//   if (likes === 0) {
//     clear.disabled = true;
//   } else {
//     clear.disabled = false;
//   }
// });

/*========================================================= */

// const textInput = document.querySelector('.text-check');
// const feedback = document.querySelector('.feedback');

// textInput.addEventListener('input', event => {
//   //зчитуємо що саме ввели, один раз зчитуємо і далі використовуємо text.length
//   const text = event.target.value;
//   //показуємл к-сть символів у абзаці
//   feedback.textContent = `Довжина: ${text.length}`;
//   //якщо більше символів колір червоний, якшо менше зелений
//   if (text.length > 10) {
//     feedback.style.color = 'red';
//   } else {
//     feedback.style.color = 'green';
//   }
// });

/*======================================================== */

// const newTask = document.querySelector('.todo-input');
// const btn = document.querySelector('.add-todo');
// const list = document.querySelector('.todo-list');

// btn.addEventListener('click', () => {
//   // Створюємо новий елемент списку <li>
//   const task = document.createElement('li');

//   // Вставляємо в <li> текст, який ввів користувач
//   task.textContent = newTask.value;

//   // Додаємо подію на <li>: при кліку текст закреслюється
//   task.addEventListener('click', () => {
//     task.style.textDecoration = 'line-through';
//   });
//   // Додаємо готовий <li> в кінець списку <ul>
//   list.append(task);

//   // очищаємо поле після додавання
//   newTask.value = '';
// });

/*===================================================== */

// const newTask = document.querySelector('.todo-input');
// const btn = document.querySelector('.add-todo');
// const list = document.querySelector('.todo-list');

// btn.addEventListener('click', () => {
//   // Створюємо новий елемент списку <li> — це буде наша задача
//   const task = document.createElement('li');
//   // Вставляємо в нього текст, який користувач ввів у поле
//   task.textContent = newTask.value;

//   // Створюємо кнопку "Видалити" для кожної задачі
//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'Видалити';

//   deleteBtn.addEventListener('click', () => {
//     task.remove(); // видаляємо весь <li>, тобто задачу
//   });
//   // Додаємо кнопку "Видалити" всередину задачі (<li>)
//   list.append(task);
//   // Додаємо готову задачу до списку <ul>
//   task.append(deleteBtn);
//   // Очищаємо поле вводу після додавання задачі

//   newTask.value = '';
// });

/*======================================================= */

// const btn = document.querySelector('.theme-btn');
// const container = document.querySelector('.page');

// btn.addEventListener('click', () => {
//   //додаємо клас дарк
//   container.classList.toggle('dark');
//   if (container.classList.contains('dark')) {
//     btn.textContent = 'Світла тема'; // якщо зараз темна, запропонувати світлу
//   } else {
//     btn.textContent = 'Темна тема'; // якщо зараз світла, запропонувати темну
//   }
// });

/*========================================================= */

// const input = document.querySelector('#color-input');
// const greeting = document.querySelector('#greeting');

// input.addEventListener('input', event => {
//   greeting.style.color = event.target.value;
// });

/*========================================================= */

// const btn = document.querySelector('.toggle-btn');
// const lamp = document.querySelector('.lamp');

// btn.addEventListener('click', () => {
//   lamp.classList.toggle('on');
// });

/*========================================================= */

// const button = document.querySelector('.theme-toggle');
// const body = document.body; // це вбудована властивість, яка автоматично повертає тобі:
// //елемент <body>, як DOM-об'єкт

// button.addEventListener('click', () => {
//   const isDark = body.classList.toggle('dark-theme');
//   button.textContent = isDark ? 'День' : 'Ніч';
// });

/*======================================================== */
// const btn = document.querySelector('.random-color');
// const body = document.body;

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// btn.addEventListener('click', () => {
//   body.style.backgroundColor = getRandomColor();
//   btn.textContent = 'Оновити колір';
// });

/* 2 варіант */
// створюємо окерму змінну для кольору, аби потім ше можна було використати його ще десь
// btn.addEventListener('click', () => {
//   const newColor = getRandomColor();
//   body.style.backgroundColor = newColor;
//   btn.textContent = 'Оновити колір';
// });

// /*======================================================== */ const button =
//   document.querySelector('.toggle-secret');
// const container = document.querySelector('.secret');

// button.addEventListener('click', () => {
//   container.classList.toggle('hidden');
//   console.log(
//     container.classList.contains('hidden')
//       ? 'Сховати секрет'
//       : 'Показати секрет'
//   );
// });

/* 2 варіант */

// button.addEventListener('click', () => {
//   const isHidden = container.classList.toggle('hidden');

//   button.textContent = isHidden ? 'Показати секрет' : 'Сховати секрет';
// });

/*========================================================= */

// const input = document.querySelector('.password-input');
// const btn = document.querySelector('.check-password');
// const div = document.querySelector('.result');

// btn.addEventListener('click', () => {
//   //очищаємо класи
//   div.classList.remove('success', 'error');

//   if (input.value.trim() === 'cherryPie2025') {
//     div.classList.add('success');
//     div.textContent = '✅ Доступ дозволено';
//   } else {
//     div.classList.add('error');
//     div.textContent = '❌ Невірний пароль';
//   }
// });

/*======================================================== */
// const email = document.querySelector('.email-input');
// const span = document.querySelector('.email-status');

// email.addEventListener('input', event => {
//   // Беремо поточне значення інпуту й одразу обрізаємо пробіли з країв
//   const value = email.value.trim();

//   // Прибираємо попередні класи (щоб не накопичувалися)
//   email.classList.remove('error', 'success');

//   // Якщо поле порожнє — просимо ввести пошту
//   if (value === '') {
//     span.textContent = 'Введи пошту';
//   }
//   // Якщо немає @ або . — це невалідна пошта (елементарна перевірка)
//   else if (!value.includes('@') || !value.includes('.')) {
//     span.textContent = 'Невірна пошта';
//     email.classList.add('error'); // додаємо червоний клас
//   }
//   // Інакше — все ок, повідомляємо про успіх
//   else {
//     span.textContent = 'OK!';
//     email.classList.add('success'); // додаємо зелений клас
//   }
// });

/*========================================================== */
// const input = document.querySelector('.username-input');
// const btn = document.querySelector('.submit-btn');
// const p = document.querySelector('.message');

// btn.addEventListener('click', () => {
//   const name = input.value.trim();
//   const length = name.length;

//   input.classList.remove('short', 'valid', 'long');

//   if (length >= 3 && length <= 10) {
//     p.textContent = `Привіт, ${name}!`;
//     p.style.color = 'green';
//     input.classList.add('valid');
//   } else if (length < 3) {
//     p.textContent = 'Імя занадто коротке';
//     p.style.color = 'red';
//     input.classList.add('short');
//   } else if (length > 10) {
//     p.textContent = 'Імя занадто довге';
//     p.style.color = 'orange';
//     input.classList.add('long');
//   }
//   setTimeout(() => {
//     p.textContent = '';
//     input.classList.remove('short', 'valid', 'long');
//   }, 5000);
// });

/*======================================================================= */

// const taskInput = document.querySelector('.task-input');
// const button = document.querySelector('.add-task');
// const list = document.querySelector('.task-list');

// button.addEventListener('click', () => {
//   //перевіряємо чи поле не порожнє
//   const taskText = taskInput.value.trim();
//   if (taskText === '') return;

//   //створюємо лішку і списку
//   const li = document.createElement('li');
//   li.textContent = taskText;

//   //в лішку додаємо кнопку видалення
//   const btn = document.createElement('button');
//   btn.textContent = '❌';
//   btn.classList.add('delete-btn');
//   li.append(btn);

//   btn.addEventListener('click', () => {
//     li.remove();
//   });

//   li.appendChild(btn); //додаємо кнопку до лі
//   list.appendChild(li); //додаємо лі до списку
//   taskInput.value = ''; // очищаємо поле інпуту
// });

/*=================================================================== */

// const productInput = document.querySelector('.product-input');
// const button = document.querySelector('.add-product');
// const list = document.querySelector('.product-list');

// button.addEventListener('click', () => {
//   // Отримуємо текст з input і обрізаємо зайві пробіли
//   const inputText = productInput.value.trim();
//   // Якщо поле порожнє — нічого не робимо
//   if (inputText === '') return;

//   // Створюємо новий елемент списку <li>
//   const li = document.createElement('li');
//   // Створюємо чекбокс
//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';

//   // Коли змінюється чекбокс (вкл/викл), додаємо/знімаємо клас для перекреслення
//   checkbox.addEventListener('change', () => {
//     li.classList.toggle('bought'); // додає/знімає клас "bought"
//   });
//   // Створюємо <span> для назви продукту
//   const span = document.createElement('span');
//   span.textContent = inputText;

//   // Кнопка видалення
//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = '❌';
//   deleteBtn.classList.add('delete-btn');
//   // Обробка кліку на кнопку видалення — видаляє весь <li>
//   deleteBtn.addEventListener('click', () => {
//     li.remove();
//   });

//   // Збираємо все до купи: додаємо в <li> чекбокс, назву і кнопку
//   li.appendChild(checkbox);
//   li.appendChild(span);
//   li.appendChild(deleteBtn);
//   // Додаємо <li> до списку <ul>
//   list.appendChild(li);

//   // Очищаємо поле вводу
//   productInput.value = '';
// });

/*=============================================================== */

// const counter = document.querySelector('.counter');
// const increase = document.querySelector('.increase');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');

// let count = 0;

// function updateCounter() {
//   counter.textContent = `${count}`;
//   if (count > 0) counter.style.color = 'green';
//   else if (count < 0) counter.style.color = 'red';
//   else counter.style.color = 'black';
// }

// increase.addEventListener('click', () => {
//   count += 1;
//   counter.textContent = `${count}`;
//   updateCounter();
// });
// decrease.addEventListener('click', () => {
//   count -= 1;
//   counter.textContent = `${count}`;
//   updateCounter();
// });
// reset.addEventListener('click', () => {
//   count = 0;
//   counter.textContent = `${count}`;
//   updateCounter();
// });

/*===================================================================== */

// const questions = document.querySelectorAll('.question');
// questions.forEach(question => {
//   question.addEventListener('click', () => {
//     // Знаходимо <p class="answer">, який поруч із цим питанням
//     //знаходимо наступний елемент у DOM, який і є відповіддю (<p> після <h3>).
//     const answer = question.nextElementSibling;

//     // Перемикаємо клас hidden — показати/сховати відповідь
//     answer.classList.toggle('hidden');
//   });
// });

/*============================================================= */
// const theme = document.querySelector('.toggle-theme');
// const container = document.querySelector('.content');

// theme.addEventListener('click', () => {
//   const body = document.body;
//   body.classList.toggle('dark-mode');
// });

/*================================================================ */
// const filterButtons = document.querySelectorAll('[data-filter]');
// const cards = document.querySelectorAll('.card');

// filterButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     //Зчитуємо значення фільтра з кнопки
//     const filter = button.dataset.filter;

//     //Проходимо по кожній картці
//     cards.forEach(card => {
//       //Тут ми для кожної .card зчитуємо, до якої вона належить категорії.
//       const category = card.dataset.category;

//       //Порівнюємо категорію картки з фільтром
//       if (filter === 'all' || category === filter) {
//         card.classList.remove('hidden'); // показуємо
//       } else {
//         card.classList.add('hidden'); // ховаємо
//       }
//     });
//   });
// });

/*==================================================================== */

// const colorButtons = document.querySelectorAll('[data-color]');
// colorButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const color = button.dataset.color;
//     alert(`Ти обрав: ${color}`);
//   });
// });

/*========================================================================= */

// const buttons = document.querySelectorAll('.color-btn');

// //проходимось по кожній кнопці
// buttons.forEach(button => {
//   //На кожну кнопку ми "вішаємо" слухача події click.
//   button.addEventListener('click', () => {
//     //Коли будь-яка кнопка клікнута: Проходимося по всіх кнопках, І знімаємо з усіх клас active. Це обов'язковий крок, щоб одна була активна, а не кілька.
//     buttons.forEach(btn => btn.classList.remove('active'));
//     //Після того, як з усіх зняли active,— ми додаємо його лише до натиснутої кнопки
//     button.classList.add('active');
//   });
// });

/*============================================================================= */

// ?блок, який змінює фон при наведенні мишки (mouseover) і повертає назад при відведенні (mouseout).

// const hoverBox = document.querySelector('#hover-box');
// hoverBox.addEventListener('mouseover', () => {
//   hoverBox.style.backgroundColor = 'orange';

//   hoverBox.addEventListener('mouseout', () => {
//     hoverBox.style.backgroundColor = 'green';
//   });
// });

/*========================================================================= */

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener('input', () => {
//   //беремо значення інпут і обрізаємо пробіли
//   const span = input.value.trim();
//   //а далі перевіряємо чи імя чи анонім
//   output.textContent = span || 'Anonymous';
// });

/*======================================================================== */

// const btn = document.querySelector('#change-bg');
// const body = document.body;

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// btn.addEventListener('click', () => {
//   const newColor = getRandomColor();
//   body.style.backgroundColor = newColor;
// });

/*============================================================================ */

// const decrement = document.querySelector('#decrement');
// const counter = document.querySelector('#counter');
// const increment = document.querySelector('#increment');

// let count = 0;

// function updateCounter() {
//   counter.textContent = count;
// }

// increment.addEventListener('click', () => {
//   count++;
//   updateCounter();
// });

// decrement.addEventListener('click', () => {
//   if (count > 0) {
//     count--;
//     updateCounter();
//   }
// });

// increment.addEventListener('click', () => {
//   count += 1;
//   counter.textContent = `${count}`;
// });

// decrement.addEventListener('click', () => {
//   if (count > 0) {
//     count -= 1;
//     counter.textContent = `${count}`;
//   }
// });

/*===================================================================== */

//подія keydown спрацьовує тільки тоді, коли щось активне в DOM має фокус, типу <input> або window.

// const span = document.querySelector('#key-output');

// window.addEventListener('keydown', event => {
//   span.textContent = event.key;
// });

/*===================================================================== */

// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', () => {
//   const requiredLength = Number(input.dataset.length); //dataset.length — це рядок, а value.length — число → треба привести до числа
//   const actualLength = input.value.trim().length; //перевіряємо шо вводить користувач

//   input.classList.remove('valid', 'invalid');

//   if (actualLength === requiredLength) {
//     input.classList.add('valid');
//   } else {
//     input.classList.add('invalid');
//   }
// });

/*===================================================================== */

// const input = document.querySelector('#item-input');
// const btn = document.querySelector('#add-item');
// const list = document.querySelector('#list');

// btn.addEventListener('click', () => {
//   const value = input.value.trim();

//   if (value === '') return; // нічого не додаємо, якщо порожнє

//   const li = document.createElement('li');
//   li.textContent = value;
//   list.append(li);
//   input.value = '';
//   input.focus();
// });

/*=============================================================== */
// Знаходимо повзунок
// const rangeInput = document.querySelector('#font-size-control');

// // Знаходимо текст, який буде змінювати розмір
// const text = document.querySelector('#text');

// // Слухаємо подію 'input' — коли рухається повзунок
// rangeInput.addEventListener('input', () => {
//   const size = rangeInput.value; // Беремо поточне значення повзунка
//   text.style.fontSize = `${size}px`; // Застосовуємо це значення до розміру шрифту
// });

/*===================================================================== */

// const taskInput = document.querySelector('#task-input');
// const addBtn = document.querySelector('#add-task');
// const taskList = document.querySelector('#task-list');

// addBtn.addEventListener('click', () => {
//   const value = taskInput.value.trim();
//   if (value === '') return;

//   const task = document.createElement('li');
//   task.textContent = value;

//   taskInput.value = '';

//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = '❌';
//   task.append(deleteBtn);
//   deleteBtn.addEventListener('click', () => {
//     task.remove();
//   });
//   taskList.append(task);
// });

/*==================================================================== */
// const themeBtn = document.querySelector('#toggle-theme');
// const body = document.body;
// themeBtn.addEventListener('click', () => {
//   const isDark = body.classList.toggle('dark-theme');
//   if (isDark) {
//     themeBtn.textContent = 'Світла тема 🌞';
//   } else {
//     themeBtn.textContent = 'Темна тема 🌙';
//   }
// });

/*====================================================================== */
// const num1 = document.querySelector('#num1');
// const num2 = document.querySelector('#num2');
// const operation = document.querySelector('#operation');
// const btn = document.querySelector('#calculate');
// const result = document.querySelector('#result');

// btn.addEventListener('click', () => {
// ? Зчитуємо значення з input'ів і приводимо до числа:
// ?➡️ Важливо: input.value — завжди текст.Тому треба зробити з нього число — через parseFloat().
//   const n1 = parseFloat(num1.value);
//   const n2 = parseFloat(num2.value);
//   let calcResult;

//? зчитуємо обрану операцію
// ?operation.value дає нам значення з <select>, наприклад: '+' або '*'.
//   switch (operation.value) {
//     case '+':
//       calcResult = n1 + n2;
//       break;
//     case '-':
//       calcResult = n1 - n2;
//       break;
//     case '*':
//       calcResult = n1 * n2;
//       break;
//     case '/':
// ?Щоб уникнути ділення на нуль
//       calcResult = n2 !== 0 ? n1 / n2 : 'Ділення на нуль!';
//       break;
//     default:
//       calcResult = 'Невідома операція';
//   }
//   result.textContent = `${calcResult}`;
// });

/*=================================================================== */

// const btnMinus = document.querySelector('#minus');
// const btnPlus = document.querySelector('#plus');
// const valueSpan = document.querySelector('#value');
// let count = 5; //?нам треба десь зберігати це число, щоб змінювати його після кожного кліку.

//?Функція, яка оновлює інтерфейс після кожної зміни
// function updateUI() {
//   valueSpan.textContent = count; // ?оновлюємо число на екрані
//   btnMinus.disabled = count <= 0; // ?Якщо count <= 0 — вимикаємо кнопку мінус
//   btnPlus.disabled = count >= 10; // ?Якщо count >= 10 — вимикаємо кнопку плюс
// }

// btnMinus.addEventListener('click', () => {
//   if (count > 0) {
//     count--; // ?зменшуємо значення
//     updateUI(); // ?оновлюємо інтерфейс
//   }
// });
// btnPlus.addEventListener('click', () => {
//   if (count < 10) {
//     count++; // ?збільшуємо значення
//     updateUI(); // ?оновлюємо інтерфейс
//   }
// });
// ?Викликаємо оновлення одразу при запуску, щоб все було правильно
// updateUI();

/*=============================================================== */

// const getFactBtn = document.querySelector('#get-fact');
// const p = document.querySelector('#fact');

// const facts = [
//   'Космос пахне паленим стейком',
//   'Восьминоги мають три серця',
//   'Лінивець може проспати 20 годин на добу',
//   'Піца - офіційно визнана овочем у США (сумно, але факт)',
//   'Бджоли можуть впізнавати обличчя людей',
// ];

// getFactBtn.addEventListener('click', () => {

//?Генеруємо випадкове число від 0 до довжини масиву - 1
//     const index = Math.floor(Math.random() * facts.length);

// ?Вибираємо факт за цим індексом
//     const randomFact = facts[index];

// ?Виводимо факт у <p>
//   p.textContent = randomFact;
// });

/*==============================================================*/
