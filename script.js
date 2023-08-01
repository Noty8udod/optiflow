let clickCounter = 0;
let lightModeButton;

document.addEventListener('DOMContentLoaded', () => {
  lightModeButton = document.getElementById('light-mode-button');
  lightModeButton.style.display = 'block';

  lightModeButton.addEventListener('click', toggleMode);
});

function toggleMode() {
  const body = document.body;
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    lightModeButton.textContent = 'Dark Mode';
  } else {
    body.classList.add('light-mode');
    lightModeButton.textContent = 'Light Mode';
  }
  clickCounter++;
  if (clickCounter >= 10) {
    body.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
    clickCounter = 0; // reset the counter
  }
}
