<script>
let someText = 'FullStack Developer';
let count = 0;
let style = {darkMode:false}
    function handleClick(){
        count+=1;
    }

    function toggle(){
        style.darkMode = !style.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
    
</script>

<style>
p{
    color: var(--theme-color);
}
span{
    color : white;
}
</style>

<div class="About">    

    {#if !style.darkMode}
    <p>{someText}</p>
    {:else}
        <p><span>Hello darkmord</span></p>    
    {/if}

    <button on:click={handleClick}>Clicks {count == 0 ? '': count}</button>

    <button on:click={toggle}>Dark Mode</button>
</div>
