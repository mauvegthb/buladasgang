// script.js for mobile menu toggle and interactive features

// Mobile menu toggle function
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
}

// Event listener for menu button
const menuButton = document.getElementById('menu-button');
if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
}

// Interactive feature example - game start button
function startGame() {
    console.log('Game started!');
    // Add more game initialization logic here
}

const startButton = document.getElementById('start-button');
if (startButton) {
    startButton.addEventListener('click', startGame);
}