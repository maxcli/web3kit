<script>
   //  import '../app.css' 
</script>
<header>
<nav>
<ul>
<li>
    <a href="/">Home</a>
</li>

<li>
<a href="/aritems" data-sveltekit-preload-data="hover">AR Items</a>
</li>
<li>
    <a  id="addanchor"  class=  "disable-click"  href="/add" >Add</a>
    </li>
<li>
    <a href="/about">About</a>
</li>
<!--
<li>
<a href="/movies"  data-sveltekit-preload-data="hover">Movies</a>
</li>
<li>
    <a href="/products" data-sveltekit-preload-data="hover">Products</a>
</li>
-->
</ul>
</nav>
<h1>Archivist_CR</h1>

</header>



<slot/>

<style>

.disable-click{
          pointer-events:none;
      }
      
nav{
    display: flex;
}

nav a{
    margin-right: 1rem;
}


</style>