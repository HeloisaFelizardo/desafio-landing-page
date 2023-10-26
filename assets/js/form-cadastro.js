import { Snackbar } from './snackbar.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
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
const database = initializeApp(firebaseConfig);

const frm = document.querySelector('#frm');
const button = document.querySelector('#enviar');

frm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(e);
	save();
});

function save() {
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	database.ref('users/' + name).set({
		name: name,
		email: email,
		message: message,
	});
	snackbar.show('Dados salvos com sucesso!');
	console.log('teste snackbar');
	/* 
	setTimeout(() => {
		button.removeEventListener('click');
		console.log('teste');
	}, 1500); */
}
