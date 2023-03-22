<script>
export let data
const {movies}=data
//console.log('movie data movies:',movies)
</script>

<h1>Movies</h1>
{#each movies as movie}
  <h2>{movie.title}</h2>  
  <p>{movie.overview}</p>
{/each}