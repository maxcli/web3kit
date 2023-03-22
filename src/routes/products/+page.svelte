<script>
    //http://localhost:5173/posts
        export let data
        const {products}=data 
        const {users}=data 
       // const {users}=await data.users
       // console.log(users)
    </script>
    
    <div>
    
        {#each products as  product }
    
    
        <h1>{product.title}</h1>
        <p>{product.stock}</p>
        
        {/each}
    
    </div>