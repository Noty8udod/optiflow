let mainContent;
let guideContent;
let backButton;
let lightModeButton = document.getElementById('light-mode-button');
let clickCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
  mainContent = document.querySelector('.container');
  guideContent = document.createElement('div');
  guideContent.style.display = 'none';
  document.body.appendChild(guideContent);

  backButton = document.createElement('button');
  backButton.textContent = 'Back';
  backButton.onclick = goBack;
  backButton.style.display = 'none';
  document.body.appendChild(backButton);

  const links = document.querySelectorAll('table a');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      loadGuide(event.target.href);
    });
  });
});

function loadGuide(url) {
  guideContent.innerHTML = `<iframe src="${url}" style="border: none; width: 100%; height: 100vh;"></iframe>`;
  guideContent.style.display = 'block';
  backButton.style.display = 'block';
  mainContent.style.display = 'none';
}

function goBack() {
  guideContent.style.display = 'none';
  backButton.style.display = 'none';
  mainContent.style.display = 'block';
}

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

  if (clickCounter === 10) {
    body.style.background = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)';
    body.style.backgroundSize = '100%';
    body.style.backgroundRepeat = 'repeat';
    clickCounter = 0;
  }
}
