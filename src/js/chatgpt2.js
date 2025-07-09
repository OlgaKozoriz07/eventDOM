// const btn = document.querySelector('.button');
// const title = document.querySelector('.title');

// btn.addEventListener('click', () => {
//   title.textContent =
//     title.textContent === 'Героям Слава!' ? 'Слава Україні!' : 'Героям Слава!';
//   //title.style.color = 'crimson';
// });

/*=========================================================== */
// const input = document.querySelector('.text-input');
// const p = document.querySelector('.text');

// input.addEventListener('input', () => {
//   const inputValue = input.value.trim();
//   p.textContent = inputValue;
// });

// input.addEventListener('input', () => {
//   p.textContent = input.value.trim() === '' ? 'Нічого не введено' : input.value;
// });

// input.addEventListener('input', () => {
//   p.textContent = input.value.toUpperCase();
// });

// input.addEventListener('input', () => {
//   const val = input.value;
//   p.textContent = `${val} (${val.length} символів)`;
// });

/*=================================================== */

// const changeColor = document.querySelector('.color');
// const body = document.body;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// changeColor.addEventListener('click', () => {
//   body.style.backgroundColor = getRandomHexColor();
// });

/*========================================================= */
// const btnMinus = document.querySelector('.minus');
// const btnPlus = document.querySelector('.plus');
// const span = document.querySelector('.value');
// let count = 0;

// btnMinus.addEventListener('click', () => {
//   count -= 1;
//   span.textContent = `${count}`;
// });
// btnPlus.addEventListener('click', () => {
//   count += 1;
//   span.textContent = `${count}`;
// });

/*============================================================== */
// const form = document.querySelector('.greeting-form');
// const input = document.querySelector('.text-input');
// const button = document.querySelector('.btn');

// const onFormSubmit = event => {
//   event.preventDefault();
//   const username = form.elements.username.value;
//   if (username === '') return;
//   const p = document.createElement('p');
//   p.textContent = `Hello ${username}!`;
//   form.append(p);
// };
// form.addEventListener('submit', onFormSubmit);

/*=========================================================== */
// const form = document.querySelector('.greeting-form');
// const errorMsg = document.querySelector('.error-message');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const username = form.elements.username.value;
//   if (username === '') {
//     errorMsg.textContent = 'Поле не може бути порожнім!';
//     errorMsg.style.display = 'block';
//     return;
//   }
//   errorMsg.style.display = 'none';

//   const p = document.createElement('p');
//   p.textContent = `Hello ${username}!`;
//   form.append(p);
// });

/*============================================================== */
// const form = document.querySelector('.email-form');
// const message = document.querySelector('.message');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const email = form.elements.email.value.trim();

//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // перевірка на валідність мейлу, чи є @ .

//   if (email === '') {
//     message.textContent = 'Поле не може бути порожнім!';
//     message.style.color = 'red';
//     message.style.display = 'block';
//     return;
//   }

//   if (!pattern.test(email)) {
//     message.textContent = 'Невірний формат email!';
//     message.style.color = 'red';
//     message.style.display = 'block';
//     return;
//   }

//   message.textContent = 'Email коректний!';
//   message.style.color = 'green';
//   message.style.display = 'block';
// });

/*=============================================================== */

// const input = document.querySelector('.todo-input');
// const button = document.querySelector('.add-btn');
// const list = document.querySelector('.todo-list');

// button.addEventListener('click', () => {
//   const value = input.value.trim();
//   if (value === '') return;

//   const li = document.createElement('li');
//   li.textContent = value;

//   li.addEventListener('click', () => {
//     li.style.textDecoration = 'line-through';
//   });

//   list.appendChild(li);
//   input.value = '';
// });

/*=============================================================== */

// const button = document.querySelector('.toggle-btn');
// const block = document.querySelector('.hidden-block');

// button.addEventListener('click', () => {
//   block.classList.toggle('hidden');
// });

// btn.addEventListener('click', () => {
//   if (block.style.display === 'none') {
//     block.style.display = 'block';
//   } else {
//     block.style.display = 'none';
//   }
// });
//css додаємо клас hidden і тут просто через toggle перемикаємо

/*=============================================================== */

// const button = document.querySelector('.add-row-btn');
// const rows = document.querySelector('tbody');

// button.addEventListener('click', () => {
//   const tr = document.createElement('tr'); // створюємо новий рядок
//   for (let i = 0; i < 3; i++) {
//     const td = document.createElement('td');
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     td.textContent = randomNumber;
//     tr.appendChild(td); // додаємо td до рядка tr
//   }
//   rows.appendChild(tr); // додаємо рядок у tbody
// });

/*============================================================ */

// const button = document.querySelector('.change-btn');
// const lights = document.querySelectorAll(
//   '.circle-red, .circle-yellow, .circle-green'
// );
// //запамятовує яке світло зараз світиться
// let currentIndex = 0;

// button.addEventListener('click', () => {
//   // 1. Прибрати всім клас "active"
//   lights.forEach(light => light.classList.remove('active'));
//   // 2. Додати "active" тільки одному колу
//   lights[currentIndex].classList.add('active');
//   // 3. Перейти до наступного (по колу)
//   currentIndex = (currentIndex + 1) % lights.length;
// });

/*================================================================== */

// const mainPicture = document.querySelector('.main-image');
// const thumbnails = document.querySelectorAll('.thumb');

// thumbnails.forEach(thumb => {
//   thumb.addEventListener('click', () => {
//     // Змінюємо головну картинку
//     mainPicture.src = thumb.src;

//     // Видаляємо "active" у всіх
//     thumbnails.forEach(t => t.classList.remove('active'));
//     // Додаємо активний стиль до натиснутої
//     thumb.classList.add('active');
//   });
// });

/*======================================================================= */
// // Знаходимо головне фото
// const mainImage = document.querySelector('.main-image');

// // Знаходимо всі мініатюри
// const thumbnails = document.querySelectorAll('.thumb');

// // Знаходимо кнопки "Назад" і "Вперед"
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// // Змінна для запам’ятовування, яке фото активне зараз
// let currentIndex = 0;

// // Функція оновлення головного зображення
// function updateMainImage(index) {
//   // Замінюємо src головного зображення на src мініатюри
//   mainImage.src = thumbnails[index].src;

//   // Прибираємо активний клас у всіх
//   thumbnails.forEach(t => t.classList.remove('active'));

//   // Додаємо активний клас тільки обраній мініатюрі
//   thumbnails[index].classList.add('active');
// }

// // Слухачі події на мініатюри
// thumbnails.forEach((thumb, index) => {
//   thumb.addEventListener('click', () => {
//     currentIndex = index; // Зберігаємо індекс активної картинки
//     updateMainImage(currentIndex); // Оновлюємо головне фото
//   });
// });

// // Клік на кнопку "Вперед"
// nextBtn.addEventListener('click', () => {
//   // Переходимо до наступного індексу, або повертаємось на початок
//   currentIndex = (currentIndex + 1) % thumbnails.length;
//   updateMainImage(currentIndex);
// });

// // Клік на кнопку "Назад"
// prevBtn.addEventListener('click', () => {
//   // Якщо ми на початку — переходимо в кінець
//   currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
//   updateMainImage(currentIndex);
// });
