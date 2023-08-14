export function menuPrincipal() {
	const menu = document.querySelectorAll('.menu ul li a');
	const top = document.querySelector('.top');
	const homeLink = document.querySelector('.menu ul li a#home');

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

	// Scroll back to the top and remove 'active' class
	homeLink.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

		top.classList.remove('active');
	});

	// Adiciona ou remove a classe 'active' no elemento .top ao rolar a página
	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			top.classList.add('active');
		} else {
			top.classList.remove('active');
		}
	});
}

export function menuBurger() {
	//setando os elementos do menu burger e menu
	const inputBurger = document.querySelector('#burger');
	const menuBurguer = document.querySelector('.burger');
	const menuPrincipal = document.querySelector('.menu');

	inputBurger.addEventListener('change', (e) => {
		e.preventDefault();
		console.log(e);
		menuPrincipal.classList.toggle('show');
	});

	// Função para lidar com a alteração de tamanho da tela
	function handleResize() {
		const larguraDaTela = window.innerWidth;
		menuBurguer.classList.toggle('show', larguraDaTela <= 1025);
	}

	// Adiciona um ouvinte de evento para o redimensionamento da janela
	window.addEventListener('resize', handleResize);

	// Chama a função inicialmente para exibir a largura da tela
	handleResize();
}
