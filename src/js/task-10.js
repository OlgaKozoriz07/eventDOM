const secretText = document.querySelector('.secret-text');

document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key.toLowerCase() === 'h') {
    secretText.textContent = 'Ти знайшла секрет! 🕵️‍♀️';
  }
});
