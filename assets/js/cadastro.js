export function cadastro() {
	const cadastro = document.querySelector('#cadastro');

	cadastro.addEventListener('click', (e) => {
		e.preventDefault();
		const target = document.querySelector('.cadastro');
		const targetOffsetTop = target.offsetTop - 30;

		window.scrollTo({
			top: targetOffsetTop,
			behavior: 'smooth',
		});
	});
}
