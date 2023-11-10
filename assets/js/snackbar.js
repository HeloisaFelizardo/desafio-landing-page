// Definição da classe Snackbar para exibir mensagens temporárias na interface do usuário
export class Snackbar {
	// Construtor da classe
	constructor() {
		// Cria um elemento div que representa a visualização da snackbar e o anexa ao corpo do documento
		this.view = document.body.appendChild(document.createElement('div'));

		// Adiciona a classe 'snackbar' ao elemento de visualização
		this.view.classList.add('snackbar');

		// Propriedade que indica se a snackbar está atualmente ativa
		this.isActive = false;

		// Fila para armazenar mensagens a serem exibidas na snackbar
		this.queue = [];

		// Intervalo de tempo entre o término de uma snackbar e o início da próxima na fila
		this.gap = 250;

		// Duração padrão de exibição de uma mensagem na snackbar em milissegundos
		this.duration = 5000;
	}

	// Método para exibir uma mensagem na snackbar
	show(message) {
		// Verifica se a snackbar está atualmente ativa
		if (this.isActive) {
			// Se ativa, adiciona a mensagem à fila para exibir posteriormente
			this.queue.push(message);
			return;
		}

		// Ativa a snackbar
		this.isActive = true;

		// Define o texto da snackbar com a mensagem fornecida
		this.view.textContent = message;

		// Adiciona a classe 'snackbar--visible' para tornar a snackbar visível
		this.view.classList.add('snackbar--visible');

		// Remove a mensagem atual da fila
		this.queue.shift();

		// Agendamento para ocultar a snackbar após a duração especificada
		setTimeout(() => this.hide(), this.duration);
	}

	// Método para ocultar a snackbar
	hide() {
		// Desativa a snackbar
		this.isActive = false;

		// Remove a classe 'snackbar--visible' para ocultar a snackbar
		this.view.classList.remove('snackbar--visible');

		// Verifica se há mensagens na fila
		if (this.queue.length) {
			// Se houver, agenda a exibição da próxima mensagem após o intervalo especificado
			setTimeout(() => this.show(this.queue[0]), this.gap);
		}
	}
}
