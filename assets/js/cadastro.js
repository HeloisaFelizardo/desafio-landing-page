export function cadastro() {
	const cadastro = document.querySelector('#cadastro');
	const nameInput = document.querySelector('#name');

	cadastro.addEventListener('click', (e) => {
		e.preventDefault();
		const target = document.querySelector('.cadastro');
		const targetOffsetTop = target.offsetTop - 30;
		nameInput.focus();

		window.scrollTo({
			top: targetOffsetTop,
			behavior: 'smooth',
		});
	});
}
