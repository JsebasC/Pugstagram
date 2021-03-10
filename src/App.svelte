<script>
	import About from "./components/About.svelte";
	export let saludo;
	export let Name;
	export let lastName;	
	let img = "https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg";
</script>

<main>
	<h1>Hello {saludo} {Name} {lastName}! </h1>
	<About/>
	<img src={img} alt="Svelte">
</main>

<style>

	:global(body){
		background-color: #f2eeef;
		color : #0084f6;		
	}

	:global(:root){
		--theme-color:Purple;
	}

	p{
		color: var(--theme-color);
	}

</style>