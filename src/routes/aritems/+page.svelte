<script>
    
    import { arweaveUrl} from '../arweavehelper'
    export let data


  //console.log('**ar weave url :',arweaveUrl)

    function viewAR(aritem) {
      let url = `${arweaveUrl}/${aritem.node.id}`;
      window.open(url, '_blank').focus();
      
    }
</script>
    
 
      <ul  class="b"  >
    {#each data.aritems  as aritem }
    
    <li >
        <p></p>
        <p>Title: {aritem.node.tags.find(t => t.name=='Title').value}   </p> 
        <p>Description: {aritem.node.tags.find(t => t.name=='Description').value}   </p> 
        <p>Protocol: {aritem.node.tags.find(t => t.name=='Protocol').value}   </p> 
        <button on:click={() => viewAR(aritem)}>View</button>
        <p></p>
      </li>
      {:else}
      <p>No Items found</p>
    {/each}
    

  </ul>

 


    <style>

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
  
  text-decoration:underline;
}

 

    ul li:after {
    content: "";
    display: block;
    height: 1px;
    width: 40%;
    margin: 10px;
    background: #f00;
}


      li:last-child {
        border-bottom: none;
      }

    ul {
      padding-left: 0;
    }
      </style>