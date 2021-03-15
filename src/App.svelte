
<!--******************************************************-->
<script>
	//Import Components
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Person from "./components/Person.svelte";
	import Skills from "./components/Skills.svelte";
	import Input from "./components/Input.svelte"
	import Photos from "./components/Photos.svelte";
	import ButtonCount from "./components/ButtonCount.svelte";

	export let saludo;
	export let Name;
	export let lastName;	
	
	let img = "https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg";

	//Declaracion objeto
	const data = {
		name: "pepitop perez",
		lastName: "apellido perez",
		age: 19,
	}

</script>
<!--******************************************************-->
<!--******************************************************-->
<main>
	<h1>Hello {saludo} {Name} {lastName}! </h1>

	<!--Utilización de componentes-->
	
	<About/> <!--Componente que tiene el darkmode y count-->
	<Text anotherText="Prueba"/> <!--Componente que muestra un texto-->
	<Text /> <!--Componente que muestra un texto-->

	<!--Enviar/Mostrar informacion desde el componente-->
	<!--Envio de variables segun un objetos (data)-->
	<Person name={data.name} lastName={data.lastName} age={data.age}/> <!--Componente que tiene la inf de una persona-->
	<Person {...data} /> <!--Componente con inf persona y que se envia un objeto-->

	<Skills/><!--Componente que tiene la logica para recorrer un objeto -->
	
	<Input/> <!--Input para agregar un valor y ese se vea reflejado en el dom en realtime-->

	<ButtonCount/> <!--Componente que tiene la logica de una variable reactiva manejada desde un store-->
	
	<br>

	<img src={img} alt="Svelte">

	<Photos/> <!-- Componenten que consume un api de fotos-->


</main>
<!--******************************************************-->
<!--******************************************************-->
<style>
	/*Estilos globales, segun etiquetas*/
	:global(body){
		background-color: #f2eeef;
		color : #0084f6;		
	}	
	/*Estilos globales*/
	:global(body.dark-mode){
		background-color: rgba(18, 15, 56, 0.836);
		color: #f2eeef;
	}

	/*Estilos globales*/
	:global(:root){
		/*Declaración de variables*/
		--theme-color:Purple;
	}

	p{ 
		/*Uso de variables*/
		color: var(--theme-color);
	}

</style>
<!--******************************************************-->