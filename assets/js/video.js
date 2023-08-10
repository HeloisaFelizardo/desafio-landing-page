export function playVideo() {
	const video = document.getElementById('video-player');
	let isPlaying = false;
	let lastPlayTime = 0;
	// Função para verificar se o vídeo está visível na tela
	function isElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
	}
	// Função para reproduzir o vídeo se estiver visível
	function handleVisibility() {
		if (isElementInViewport(video)) {
			if (!isPlaying) {
				video.currentTime = lastPlayTime; // Retomar a reprodução a partir do último tempo
				video.play();
				isPlaying = true;
			}
		} else {
			if (isPlaying) {
				video.pause();
				lastPlayTime = video.currentTime; // Armazenar o tempo atual da reprodução
				isPlaying = false;
			}
		}
	}
	// Adicionar um listener para verificar quando a página é rolada
	window.addEventListener('scroll', handleVisibility);
}
