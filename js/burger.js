
export function burgerFnc() {

	const burgerMenu = document.querySelector('.Burger_menu');
	const overlay = document.querySelector('.Burger_nav');
	const navBar = document.querySelector('.navigation')
	const SingUpBtn = document.querySelector('.button')


	if (burgerMenu && overlay) {
		
		burgerMenu.addEventListener('click', function () {
			burgerMenu.classList.toggle('close_burger');
			overlay.classList.toggle('overlay');
			navBar.classList.toggle('NavBarHide')
			SingUpBtn.classList.toggle('buttonHide')
		});

		const links = overlay.querySelectorAll('a');
		links.forEach((link) => {
			link.addEventListener('click', () => {
				burgerMenu.classList.remove('close_burger');
				overlay.classList.remove('overlay');
				navBar.classList.remove('NavBarHide')
				SingUpBtn.classList.remove('buttonHide')
			});
		});

		
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				burgerMenu.classList.remove('close_burger');
				overlay.classList.remove('overlay');
				navBar.classList.remove('NavBarHide')
				SingUpBtn.classList.remove('buttonHide')
			}
		});
	};
};