import { menuBurger } from './menu-burguer.js';
import { menuPrincipal } from './menu.js';
import { cadastro } from './cadastro.js';
import { playVideo } from './video.js';

//playVideo();
document.addEventListener('DOMContentLoaded', () => {
	scrollToTop();
	menuPrincipal();
	menuBurger();
	cadastro();
});

function scrollToTop() {
	// Usa a função scrollTo do objeto window para rolar para o topo
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
