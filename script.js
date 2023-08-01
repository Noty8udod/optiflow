let clickCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  
  // Check if a theme was previously selected
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    themeToggleButton.textContent = savedTheme === 'light-mode' ? 'Dark Mode' : 'Light Mode';
  }

  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeToggleButton.textContent = 'Dark Mode';
      localStorage.setItem('theme', 'light-mode');
    } else {
      themeToggleButton.textContent = 'Light Mode';
      localStorage.setItem('theme', 'dark-mode');
    }
    clickCounter++;
    if (clickCounter >= 10) {
      document.body.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
      clickCounter = 0; // reset the counter
    }
  });
});
