<script>
   export const appName ='Archivist_CR'  //todo read from config.
</script>
<header>
<nav>
<ul>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a id="itemanchor"  class=  "disable-click"  href="/aritems" data-sveltekit-preload-data="hover">AR Items</a>
    </li>
    <li>
        <a  id="addanchor"  class=  "disable-click"  href="/add" >Add</a>
    </li>
    <li>
        <a href="/about">About</a>
    </li>
</ul>
</nav>
<h1>{appName}</h1>  

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