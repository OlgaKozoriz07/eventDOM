const input = document.querySelector('.email-input');
const button = document.querySelector('.submit-btn');
const message = document.querySelector('.result-message');

button.addEventListener('click', () => {
  //Отримує введене значення
  const email = input.value.trim(); //беремо значення з input і обрізаємо пробіли
  if (email.includes('@') && email.includes('.')) {
    //Виводить результат у <p>
    message.textContent = 'Email прийнято ✅';
    //Міняє колір повідомлення (зелене або червоне)
    message.style.color = 'green';
  } else {
    message.textContent = 'Неправильний email ❌';
    message.style.color = 'red';
  }
});
