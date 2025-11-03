const burgerMenu = document.querySelector('.Burger_menu');
const overlay = document.querySelector('.Burger_nav');
const navBar = document.querySelector('.navigation')
const SingUpBtn = document.querySelector('.button')

if (burgerMenu && overlay) {
	// Toggle classes on click
	burgerMenu.addEventListener('click', function () {
		burgerMenu.classList.toggle('close_burger');
		overlay.classList.toggle('overlay');
        navBar.classList.toggle('NavBarHide')
        SingUpBtn.classList.toggle('buttonHide')
	});

	// Close menu when a link inside the overlay is clicked
	const links = overlay.querySelectorAll('a');
	links.forEach((link) => {
		link.addEventListener('click', () => {
			burgerMenu.classList.remove('close_burger');
			overlay.classList.remove('overlay');
            navBar.classList.remove('NavBarHide')
            SingUpBtn.classList.remove('buttonHide')
		});
	});

	// Optional: close on Escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			burgerMenu.classList.remove('close_burger');
			overlay.classList.remove('overlay');
            navBar.classList.remove('NavBarHide')
            SingUpBtn.classList.remove('buttonHide')
		}
	});
}