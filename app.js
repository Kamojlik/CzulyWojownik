
let hamburgerMenu = document.querySelector('.hamburger-menu');
let dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	hamburgerMenu.classList.toggle('change');
	dropdownMenu.classList.toggle('hide');
}
	
	