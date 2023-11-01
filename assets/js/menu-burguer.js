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
		menuBurguer.classList.toggle('show', larguraDaTela >= 200);
	}

	// Adiciona um ouvinte de evento para o redimensionamento da janela
	window.addEventListener('resize', handleResize);

	// Chama a função inicialmente para exibir a largura da tela
	handleResize();
}
