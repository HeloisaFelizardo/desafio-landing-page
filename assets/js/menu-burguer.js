export function menuBurger() {
	//setando os elementos do menu burger e menu
	const inputBurger = document.querySelector('#burger');
	const menuPrincipal = document.querySelector('.menu');

	inputBurger.addEventListener('change', (e) => {
		e.preventDefault();
		console.log(e);
		menuPrincipal.classList.toggle('show');
	});
}
