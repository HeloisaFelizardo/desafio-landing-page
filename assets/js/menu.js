export function menuPrincipal() {
	const menu = document.querySelectorAll('.menu ul li a');

	menu.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();

			// Remove a classe 'show' de todos os itens do menu
			menu.forEach((menuItem) => {
				menuItem.classList.remove('show');
			});

			// Adiciona a classe 'show' ao item do menu clicado
			item.classList.add('show');

			const target = document.querySelector(item.getAttribute('href'));
			const targetOffsetTop = target.offsetTop - 30;

			window.scrollTo({
				top: targetOffsetTop,
				behavior: 'smooth',
			});

			top.classList.add('active');
		});
	});
}
