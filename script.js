let mainContent;
let guideContent;

document.addEventListener('DOMContentLoaded', () => {
  mainContent = document.querySelector('.container');
  guideContent = document.createElement('div');
  guideContent.style.display = 'none';
  guideContent.style.overflow = 'hidden';
  document.body.appendChild(guideContent);

  const links = document.querySelectorAll('table a');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      loadGuide(event.target.href);
    });
  });
});

async function loadGuide(url) {
  const response = await fetch(url);
  const text = await response.text();
  guideContent.innerHTML = text;
  guideContent.style.display = 'block';
  mainContent.style.display = 'none';
}

function goBack() {
  guideContent.style.display = 'none';
  mainContent.style.display = 'block';
}

let clickCounter = 0;
const lightModeButton = document.getElementById('light-mode-button');

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
