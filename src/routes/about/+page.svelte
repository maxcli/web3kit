<script>
 import { arweaveUrl,getBalance} from '../arweavehelper'
 import { version } from '$app/environment'
 
 export let data
 const {user}=data

 $: viewBalance =parseFloat(user.balance).toString()  //bind to html
 


</script>

 
<p></p>
<h1>Permanent storage for Archivests</h1>
<p><b>AR URL: {arweaveUrl }</b></p>
 
     
 
 
{#if user.authCookie }
   <p><b>AR Wallet Address: {user.authCookie }</b></p>
   <p/>
   <label for="arbalancetxt">Wallet Balance(AR):</label>
   <span>
      <input  bind:value={viewBalance} disabled   name="arbalancetxt" id="arbalancetxt"     type="text" />
   </span>
   <p/>
   {/if}
<p>Version: {version}</p>


<p>GNU GENERAL PUBLIC LICENSE Version 3</p>
 