// Importa a classe Snackbar do módulo './snackbar.js'
import { Snackbar } from './snackbar.js';

// Importa funções específicas do Firebase SDK usando URLs diretos para os arquivos
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

// Cria uma instância da classe Snackbar
const snackbar = new Snackbar();

// Configuração do Firebase com as credenciais do projeto
const firebaseConfig = {
	apiKey: 'YOUR_API_KEY',
	authDomain: 'YOUR_AUTH_DOMAIN',
	projectId: 'YOUR_PROJECT_ID',
	storageBucket: 'YOUR_STORAGE_BUCKET',
	messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
	appId: 'YOUR_APP_ID',
};

// Inicializa o aplicativo Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);

// Obtém uma referência para o banco de dados Firestore
const db = getFirestore(app);

// Obtém referências para os elementos HTML do formulário
const frm = document.querySelector('#frm');
const button = document.querySelector('#enviar');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Adiciona um ouvinte de evento de envio do formulário
frm.addEventListener('submit', async (e) => {
	// Impede o comportamento padrão de envio do formulário, que, neste caso, evita a recarga da página
	e.preventDefault();

	// Pega os valores dos campos do formulário
	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	// Chama a função 'save' para salvar os dados no Firebase
	await save(name, email, message);

	// Remove o evento de clique do botão após o envio
	button.removeEventListener('click', save);

	// Limpa os campos do formulário
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
});

// Função assíncrona para salvar os dados no Firebase
async function save(name, email, message) {
	// Adiciona um novo documento à coleção 'users' com os dados fornecidos
	await addDoc(collection(db, 'users'), {
		name: name,
		email: email,
		message: message,
	});

	// Mostra uma mensagem de sucesso usando a instância da classe Snackbar
	snackbar.show('Dados salvos com sucesso!');
}
