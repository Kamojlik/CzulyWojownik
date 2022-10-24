// overlay
let images = document.querySelectorAll('.img-wrapper');
let overlayImg = document.querySelector('.overlay img');

images.forEach(function(image){
	image.addEventListener('click', function(event){
		document.querySelector('html').classList.add('overlay-active');
		overlayImg.src = event.target.querySelector('img').src.replace('_min', '');
	});
});

document.querySelector('.gallery-close')?.addEventListener('click', function(){
	document.querySelector('html').classList.remove('overlay-active');
});


// hamburger
let hamburgerMenu = document.querySelector('.hamburger-menu');
let dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
	hamburgerMenu.classList.toggle('change');
	dropdownMenu.classList.toggle('hide');
	document.querySelector('html').classList.toggle('menu-active');
}

// closing dropdown 
let dropdownMenuItem = document.querySelectorAll('.menu-item');

	dropdownMenuItem.forEach(function(item){

		item.addEventListener('click', function(event){
			document.querySelector('html').classList.remove('menu-active');
			document.querySelector('.dropdown-menu').classList.remove('hide');
			document.querySelector('.hamburger-menu').classList.remove('change');
		});
	});

		
// show workshop details

let showDetailsBtn = document.querySelectorAll('.show-details-btn');	
let showDetailsContainer = document.querySelector('.show-details-container');
let hideDetailsBtn = document.querySelectorAll('.hide-details-btn');

showDetailsBtn.forEach(function(button){
	button.addEventListener('click', function(event){
		toggleContent(event.target);
	});
})

hideDetailsBtn.forEach(function(button){
	button.addEventListener('click', function(event){
		toggleContent(event.target);
	});
})


function toggleContent(button) {
	button.closest('.workshop-container').querySelector('.show-details-container').classList.toggle('show');
}



