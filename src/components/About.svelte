
<!--******************************************************-->
<script>
    //Components
    import Button from "./Button.svelte";        

    //Variables
    let someText = 'FullStack Developer';
    let count = 0;
    let style = {darkMode:false}

    //evnto click
    function handleClick(){
        count+=1;
    }

    //Evento dark mode
    function toggle(){
        style.darkMode = !style.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
    
</script>
<!--******************************************************-->
<style>
p{
    color: var(--theme-color);
}
span{
    color : white;
}
</style>
<!--******************************************************-->
<div class="About">    

    <!--Condicional si el modo oscuro esta activado-->
    {#if !style.darkMode}
    <p>{someText}</p>
    {:else}
        <p><span>Hello darkmord</span></p>    
    {/if}

    <!--Componente boton - evento -->
    <Button text="Click" count={count} on:click={handleClick}/> <!--Componente que le da logica a un boton-->
    <Button text="DarkMode" on:click={toggle}/>

    <br>

    <!--Evento -->
    <button on:click={handleClick}>Clicks {count == 0 ? '': count}</button>

    <button on:click={toggle}>Dark Mode</button>
</div>
<!--******************************************************-->