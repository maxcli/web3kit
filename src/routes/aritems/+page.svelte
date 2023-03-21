<script>
    // url http://localhost:5173/aritems
        export let data

      //  console.log('*** aritem page.svelte data:',data)
    </script>
    
    <div>
    
    {#each data.posts as aritem }
    
    
        <h1>${aritem.node.id}</h1>
        <p>Title:${aritem.node.tags.find(t => t.name=='Title').value}   </p> 
        <p>Description:${aritem.node.tags.find(t => t.name=='Description').value}   </p> 
        <p>Protocol:${aritem.node.tags.find(t => t.name=='Protocol').value}   </p> 
    
    {/each}
    
    </div>