
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navContent = document.querySelector('.nav-content');

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	navContent.classList.toggle('change');
	hamburgerMenu.classList.toggle('change');
}
	