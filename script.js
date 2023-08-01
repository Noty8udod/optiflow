let mainContent;
let guideContent;
let clickCounter = 0;
let themeToggleButton;

document.addEventListener('DOMContentLoaded', () => {
  themeToggleButton = document.getElementById('theme-toggle-button');
  themeToggleButton.style.display = 'block'; // This line shows the button on the main page

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

  themeToggleButton.addEventListener('click', toggleTheme);
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

function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    themeToggleButton.textContent = 'Dark Mode';
    themeToggleButton.style.backgroundColor = '#222';
    themeToggleButton.style.color = '#ddd';
  } else {
    body.classList.add('light-mode');
    themeToggleButton.textContent = 'Light Mode';
    themeToggleButton.style.backgroundColor = '#f9f9f9';
    themeToggleButton.style.color = '#333';
  }
  clickCounter++;
  if (clickCounter >= 10) {
    body.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
    clickCounter = 0; // reset the counter
  }
}
