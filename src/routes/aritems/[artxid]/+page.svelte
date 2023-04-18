<script>
    export let data
    //console.log('aritems/[artxid]/page.svelte data:',data)
    const {arrecord}=data

</script>

<h1>ID:{arrecord.id}</h1>

 <p>Title: {arrecord.tags.find(t => t.name=='Title').value}   </p> 
 <p>Description: {arrecord.tags.find(t => t.name=='Description').value}   </p> 
 
 
