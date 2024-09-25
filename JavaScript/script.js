// Select the hamburger icon and the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'show' class to display or hide the menu
    navMenu.classList.toggle('show');
});