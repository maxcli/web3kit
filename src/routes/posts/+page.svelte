<script>
//http://localhost:5173/posts
    export let data
    const {posts}=data
    //console.log(data)
</script>

<div>

{#each posts as post }


<h1>{post.title}</h1>
<p>{post.body}</p>

{/each}

</div>