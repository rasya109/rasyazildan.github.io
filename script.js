// Toggle navbar menu for responsive design
const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

const text = "Rasya Zildan"; // Text to be typed
const typingHeading = document.getElementById("typing-heading");

let forward = true;
let index = 0;

function type() {
  if (forward) {
    typingHeading.textContent = text.slice(0, index);
    index++;
  } else {
    typingHeading.textContent = text.slice(0, index);
    index--;
  }

  if (index === text.length) {
    forward = false;
    setTimeout(type, 500); // Wait before deleting
  } else if (index === 0) {
    forward = true;
    setTimeout(type, 500); // Wait before typing again
  } else {
    setTimeout(type, 200); // Typing speed (adjust as needed)
  }
}

type(); // Start typing when the page loads
