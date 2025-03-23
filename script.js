// Toggle dark/light mode
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Check for saved user preference, if any, on page load
const currentMode = localStorage.getItem('mode');
if (currentMode) {
  body.classList.add(currentMode);
  updateIcon(currentMode);
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  
  // Save user preference to localStorage
  localStorage.setItem('mode', isDarkMode ? 'dark-mode' : '');
  
  // Update the icon based on the mode
  updateIcon(isDarkMode ? 'dark-mode' : '');
});

function updateIcon(mode) {
  toggleButton.innerHTML = mode === 'dark-mode' ? '☀️' : '🌙';
}
