export function cadastro() {
	const cadastro = document.querySelector('#cadastro');
	const top = document.querySelector('.top');
	const homeLink = document.querySelector('.menu ul li a#home');

	cadastro.addEventListener('click', (e) => {
		e.preventDefault();
		const target = document.querySelector('.cadastro');
		const targetOffsetTop = target.offsetTop - 30;

		window.scrollTo({
			top: targetOffsetTop,
			behavior: 'smooth',
		});

		top.classList.add('active');
	});

	// Scroll back to the top and remove 'active' class
	homeLink.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		top.classList.remove('active');
	});
}
