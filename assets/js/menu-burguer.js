// Função responsável por configurar a interatividade do menu burger
export function menuBurger() {
	// Obtém a referência para o elemento de input do menu burger
	const inputBurger = document.querySelector('#burger');

	// Obtém a referência para o elemento HTML do menu principal
	const menuPrincipal = document.querySelector('.menu');

	// Adiciona um ouvinte de evento para o evento 'change' no input do menu burger
	inputBurger.addEventListener('change', (e) => {
		// Impede o comportamento padrão do evento, que neste caso, evita a mudança no estado do input
		e.preventDefault();

		// Exibe no console o objeto de evento para fins de depuração
		console.log(e);

		// Alterna a classe 'show' no menu principal, controlando assim a visibilidade do menu
		menuPrincipal.classList.toggle('show');
	});
}
