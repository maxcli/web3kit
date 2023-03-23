<script>
 
 import {page} from '$app/stores'



</script>


 
<p>SvelteKit API endpoints for Arweave</p>


{#if $page.data.user}
     
    Welcome {$page.data.user}
{/if}

 

