// Função responsável por controlar a reprodução automática de um vídeo quando ele está visível na tela
export function playVideo() {
	// Obtém a referência para o elemento de vídeo pelo ID 'video-player'
	const video = document.getElementById('video-player');

	// Variáveis de controle de estado da reprodução
	let isPlaying = false;
	let lastPlayTime = 0;

	// Função para verificar se o vídeo está visível na tela
	function isElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
	}

	// Função para manipular a visibilidade do vídeo e controlar a reprodução
	function handleVisibility() {
		// Verifica se o vídeo está atualmente visível na tela
		if (isElementInViewport(video)) {
			// Se não estiver reproduzindo, inicia a reprodução do vídeo
			if (!isPlaying) {
				// Retoma a reprodução a partir do último tempo armazenado
				video.currentTime = lastPlayTime;
				video.play();
				isPlaying = true;
			}
		} else {
			// Se estiver reproduzindo e o vídeo não estiver visível, pausa a reprodução
			if (isPlaying) {
				video.pause();
				// Armazena o tempo atual da reprodução para retomar a partir desse ponto mais tarde
				lastPlayTime = video.currentTime;
				isPlaying = false;
			}
		}
	}

	// Adiciona um ouvinte de evento para verificar quando a página é rolada
	window.addEventListener('scroll', handleVisibility);
}
