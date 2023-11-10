// Função que manipula o evento de clique no elemento com o id 'cadastro'
export function cadastro() {
	// Obtém a referência para o elemento HTML com o id 'cadastro'
	const cadastro = document.querySelector('#cadastro');

	// Adiciona um ouvinte de evento de clique ao elemento 'cadastro'
	cadastro.addEventListener('click', (e) => {
		// Impede o comportamento padrão do clique, que, neste caso, evita a navegação para uma nova página
		e.preventDefault();

		// Obtém a referência para o elemento HTML com a classe 'cadastro'
		const target = document.querySelector('.cadastro');

		// Obtém a posição superior do elemento 'target' em relação ao topo da página e ajusta por uma margem de 30 pixels
		const targetOffsetTop = target.offsetTop - 30;

		// Realiza um rolar suave (scroll) até a posição específica do elemento 'target'
		window.scrollTo({
			top: targetOffsetTop,
			behavior: 'smooth',
		});
	});
}
