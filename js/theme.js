const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  root.setAttribute('data-theme', 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('theme-toggle');

  const updateButtonText = () => {
    if (root.getAttribute('data-theme') === 'dark') {
      themeButton.textContent = 'Светлая тема';
    } else {
      themeButton.textContent = 'Тёмная тема';
    }
  };

  updateButtonText();

  themeButton.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'dark') {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    updateButtonText();
  });
});
