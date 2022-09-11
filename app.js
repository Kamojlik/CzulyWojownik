// overlay
let images = document.querySelectorAll('.img-wrapper');
let overlayImg = document.querySelector('.overlay img');

images.forEach(function(image){
	image.addEventListener('click', function(event){
		document.querySelector('html').classList.add('overlay-active');
		overlayImg.src = event.target.querySelector('img').src.replace('_min', '');
	});
});




// hamburger
let hamburgerMenu = document.querySelector('.hamburger-menu');
let dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	hamburgerMenu.classList.toggle('change');
	dropdownMenu.classList.toggle('hide');
}
	
	

	
	 	//let hamburgerMenu = document.querySelector('.hamburger-menu');

		//hamburgerMenu.addEventListener('click', toggleMenu);

		//function toggleMenu() {
			//document.querySelector('html').classList.toggle('menu-active');
		//}
	 