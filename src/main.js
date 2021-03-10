import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		saludo: 'world',
		Name: 'Johan',
		lastName: 'Cuellar'
	}
});

export default app;
