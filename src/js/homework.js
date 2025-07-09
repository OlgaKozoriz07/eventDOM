//?Це ми створюємо змінну numberOfCategories, яка містить всі елементи з класом .item. Тобто оті три <li class="item"> у твоєму списку:

// ?const numberOfCategories = document.querySelectorAll('.item');
//?виводимо в консоль к-сть категорій
// console.log(`Number of categories: ${numberOfCategories.length}`);

// numberOfCategories.forEach(item => {
//?Беремо першу дитину (firstElementChild) елемента .item → це <h2>Animals</h2> і подібні.
// ?.textContent — дістаємо текст всередині, тобто "Animals", "Products" і т.д.
//   console.log(`Category: ${item.firstElementChild.textContent}`);

//?lastElementChild — це останній "дитячий" тег у .item, тобто ось цей:
//<ul>
//<li>Cat</li>
//<li>Hamster</li>
//</ul>
// ?.children — всі елементи <li> всередині цього <ul>.
//?.length — скільки таких елементів.
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

// const categories = document.querySelectorAll('.item');

// // console.log(categories);

// const firstCategory = categories[0];

// console.log(firstCategory);
// console.log(firstCategory.firstElementChild.textContent); // "Animals"
// console.log(firstCategory.lastElementChild.children.length); // 4

// console.log(document.querySelectorAll('li').length); //15
// console.log(document.querySelectorAll('.item').length); //3

/*============================================================================= */

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     alt: 'Alpine Spring Meadows',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     alt: 'Nature Landscape',
//   },
//   {
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     alt: 'Lighthouse Coast Sea',
//   },
// ];

// const list = document.querySelector('.gallery');

// const listItem = images
//   //images.map(...) — це як цикл, який перебирає кожну картинку з масиву.
//   .map(image => {
//     //створюємо html
//     return `<li class='gallery__item'>
//   <img src='${image.url}' alt='${image.alt}' class='gallery__image'>
//   </li>`;
//   })
//   .join('');
// list.insertAdjacentHTML('beforeend', listItem);

/*=========================================================================== */

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener('input', () => {
//   const span = input.value.trim();
//   output.textContent = span || 'Anonymous';
// });

/*============================================================================= */
// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', event => {
//   //Щоб сторінка не перезавантажувалась
//   event.preventDefault();

//   // Дістаємо елементи форми по іменах інпутів
//   //const { email, password } = form.elements;(деструктуризація)
//   const { email, password } = event.currentTarget.elements;

//   // Очищаємо значення від пробілів на початку і в кінці
//   const trimmedEmail = email.value.trim();
//   const trimmedPassword = password.value.trim();

//   // Перевіряємо: якщо будь-яке з полів порожнє — виводимо попередження
//   if (!trimmedEmail || !trimmedPassword) {
//     alert('All form fields must be filled in');
//     return; // Зупиняємо подальше виконання
//   }

//   // Створюємо об'єкт з даними форми які ввів користувач
//   const formData = {
//     email: trimmedEmail,
//     password: trimmedPassword,
//   };

//   // Виводимо цей об'єкт у консоль
//   console.log(formData);

//   // Очищаємо форму після відправки
//   loginForm.reset();
// });

// /*
// 🔹 const { email, password } = event.currentTarget.elements;
// Тут трохи магії (але простої):

// 🔸 event.currentTarget — це форма, на якій спрацювала подія (тобто loginForm).

// 🔸 .elements — спеціальна властивість форми, яка містить усі інпути всередині неї, доступні по name.

// */

/*========================================================================== */

// const btn = document.querySelector('.change-color');
// const span = document.querySelector('.color');
// const body = document.body;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// btn.addEventListener('click', () => {
//   const newColor = getRandomHexColor();
//   body.style.backgroundColor = newColor;
//   span.textContent = newColor;
// });

/*============================================================================== */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = ''; //очистили старі бокси
  const boxesFragment = document.createDocumentFragment(); //спецструктура для масової вставки елементів, щоб не було лагів

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('box');
    boxesFragment.appendChild(box);
  }
  boxesContainer.appendChild(boxesFragment);
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

function onCreateButtonClick() {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function onDestroyButtonClick() {
  destroyBoxes();
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick);
