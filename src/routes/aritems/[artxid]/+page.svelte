<script>
    export let data
    //console.log('aritems/[artxid]/page.svelte data:',data)
    const {product}=data

</script>

<h1>ID:{product.id}</h1>

 <p>Title:${product.tags.find(t => t.name=='Title').value}   </p> 
 <p>Description:${product.tags.find(t => t.name=='Description').value}   </p> 
 <p>Protocol:${product.tags.find(t => t.name=='Protocol').value}   </p> 
 
