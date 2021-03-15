<script>
    //Traer js que maneja nuestra variable reactiva
    import { count } from "../store/store.js";

    function handleClick(){
        count.update(n => n + 1);
    }
</script>

<!--******************************************************-->
<!--******************************************************-->

<style>
    button{
        background-color: #f77700;
        color:  white;
        border: none;
        border-radius: 4px;
    }
</style>
<!--******************************************************-->
<!--******************************************************-->
<button on:click={handleClick}>
    <!--Manejo reactivo de la variable-->
    Click {$count = 0 ? '' : $count}
</button>