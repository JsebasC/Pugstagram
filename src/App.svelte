<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";

	export let saludo;
	export let Name1;
	export let lastName1;	
	export let Age;	
	let img = "https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg";


	const data = {
		name: "pepitop perez",
		lastName: "apellido perez",
		age: 19,
	}

</script>

<main>
	<h1>Hello {saludo} {Name1} {lastName1}! </h1>
	<About/>
	<Text anotherText="Prueba"/>
	<Text />
	<Person name={data.name} lastName={data.lastName} age={data.age}/>
	<Person {...data} />
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