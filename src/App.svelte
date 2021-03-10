<script>
	export let saludo;
	export let Name;
	export let lastName;	
	let img = "https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg";
</script>

<main>
	<h1>Hello {saludo} {Name} {lastName}! </h1>
	<p>Backend Develpor</p>
	<img src={img} alt="Svelte">
</main>

<style>

	:global(body){
		background-color: #f2eeef;
		color : #0084f6;		
	}

	:global(:root){
		--theme-color:Black	;
	}

	p{
		color: var(--theme-color);
	}


	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img{
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>