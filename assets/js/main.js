import { menuBurger } from './menu-burguer.js';
import { menuPrincipal } from './menu.js';
import { cadastro } from './cadastro.js';
import { playVideo } from './video.js';

//playVideo();
document.addEventListener('DOMContentLoaded', () => {
	menuPrincipal();
	menuBurger();
	cadastro();
});
