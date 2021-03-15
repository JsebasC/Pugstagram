<script>	
export let count = 0;
export let text;
</script>

<!--Boton que recibe por parametros texto y contador. Ademas cuenta con un evento click-->
<button on:click="">{text} {count= 0 ? '':count}</button>