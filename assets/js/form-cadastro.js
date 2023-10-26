import { Snackbar } from './snackbar.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getFirestore, collection, addDoc, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

const snackbar = new Snackbar();

const firebaseConfig = {
	apiKey: 'AIzaSyC5SZgX6heAiS7iEXaBPpxGp4tppBEC8mE',
	authDomain: 'mediflora-f8ed0.firebaseapp.com',
	projectId: 'mediflora-f8ed0',
	storageBucket: 'mediflora-f8ed0.appspot.com',
	messagingSenderId: '54391526759',
	appId: '1:54391526759:web:03b34256df3c79ad080bc2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const frm = document.querySelector('#frm');
const button = document.querySelector('#enviar');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

frm.addEventListener('submit', async (e) => {
	e.preventDefault();
	console.log(e);

	// Pega os valores dos campos do formulário
	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	// Salva os dados no Firebase
	await save(name, email, message);

	// Remove o evento de clique do botão após o envio
	button.removeEventListener('click', save);

	// Limpa os campos do formulário
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
});

async function save(name, email, message) {
	await addDoc(collection(db, 'users'), {
		name: name,
		email: email,
		message: message,
	});

	snackbar.show('Dados salvos com sucesso!');
}
