
<!--******************************************************-->
<script>
  
import {onMount} from 'svelte';

    let photos = [];

    //Callback para consumir api 
    onMount(async()=>{
        console.log('OnMount');
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
        photos = await response.json();
    });

</script>
<!--******************************************************-->
<!--******************************************************-->
<div class="Photos">

    <!--Recorro peticion de json place holder-->
{#each photos as photo}

    <figure>
        <img src="{photo.thumbnailUrl}" alt={photo.title}>
        <figcaption>{photo.title}</figcaption>
    </figure>
    {:else}
    <p>Loading..</p>
{/each}

</div>