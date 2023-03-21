<script>
    export let data
    console.log('aritems/[artxid]/page.svelte data:',data)
    //const {product}=data

</script>

<h1>ID:{data.product.id}</h1>

 <p>Title:${data.product.tags.find(t => t.name=='Title').value}   </p> 
 <p>Description:${data.product.tags.find(t => t.name=='Description').value}   </p> 
 <p>Protocol:${data.product.tags.find(t => t.name=='Protocol').value}   </p> 
 
