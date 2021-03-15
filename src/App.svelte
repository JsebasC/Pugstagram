<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	import Skills from "./components/Skills.svelte";

	export let saludo;
	export let Name;
	export let lastName;	
	export let Age;	
	let img = "https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg";


	const data = {
		name: "pepitop perez",
		lastName: "apellido perez",
		age: 19,
	}

</script>

<main>
	<h1>Hello {saludo} {Name} {lastName}! </h1>
	<About/>
	<Text anotherText="Prueba"/>
	<Text />
	<Person name={data.name} lastName={data.lastName} age={data.age}/>
	<Person {...data} />
	<Skills/>
	<img src={img} alt="Svelte">
</main>

<style>

	:global(body){
		background-color: #f2eeef;
		color : #0084f6;		
	}

	:global(body.dark-mode){
		background-color: rgba(18, 15, 56, 0.836);
		color: #f2eeef;
	}


	:global(:root){
		--theme-color:Purple;
	}

	p{
		color: var(--theme-color);
	}

</style>