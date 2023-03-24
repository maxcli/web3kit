<script>
 import { arweaveUrl,getBalance} from '../arweavehelper'
 import { version } from '$app/environment'
 
 export let data
 
 let ar_balance    
 $: viewBalance =parseFloat(ar_balance)  //bind to html
 ar_balance=  callgetBalanceAsync(data.authCookie)

 async function  callgetBalanceAsync(addr) {
    ar_balance =await getBalance(addr)

 }

</script>

 
<p></p>
<h1>Permanent storage for Archivests</h1>
<p><b>AR URL: {arweaveUrl }</b></p>
 
     
 
 

<p><b>AR Wallet Address: {data.authCookie }</b></p>

<p/>
<label for="arbalancetxt">Wallet Balance(AR):</label>
<span>
    <input  bind:value={viewBalance} disabled   name="arbalancetxt" id="arbalancetxt"     type="text" />
</span>
<p/>
 
<p><b>Version : {version}</b></p>

<p>Contact me : Petercli@hotmail.com</p>

<p>GNU GENERAL PUBLIC LICENSE Version 3</p>
 