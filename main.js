const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('navbarNav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class on the menu
    // Optional: Change hamburger icon to a 'close' icon
    if (navMenu.classList.contains('active')) {
        hamburger.innerHTML = '&#x2716;'; // X icon
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    }
});