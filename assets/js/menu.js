// Função responsável por configurar o comportamento do menu principal
export function menuPrincipal() {
	// Obtém todas as âncoras dentro dos itens de lista do menu
	const menu = document.querySelectorAll('.menu ul li a');

	// Para cada âncora no menu
	menu.forEach((item) => {
		// Adiciona um ouvinte de evento para o evento de clique
		item.addEventListener('click', (e) => {
			// Impede o comportamento padrão do clique, que, neste caso, evita a navegação para uma nova página
			e.preventDefault();

			// Remove a classe 'show' de todos os itens do menu para garantir que apenas o item clicado tenha a classe
			menu.forEach((menuItem) => {
				menuItem.classList.remove('show');
			});

			// Adiciona a classe 'show' ao item do menu clicado para indicar visualmente o estado ativo
			item.classList.add('show');

			// Obtém a referência para o elemento alvo usando o atributo 'href' da âncora clicada
			const target = document.querySelector(item.getAttribute('href'));

			// Calcula a posição superior do elemento alvo ajustado por uma margem de 30 pixels
			const targetOffsetTop = target.offsetTop - 30;

			// Realiza um rolar suave até a posição específica do elemento alvo
			window.scrollTo({
				top: targetOffsetTop,
				behavior: 'smooth',
			});
		});
	});
}
