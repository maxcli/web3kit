<script>
    import { onMount } from 'svelte'
    import { browser } from '$app/environment'
    import {page} from '$app/stores'
    import { ArweaveWebWallet } from 'arweave-wallet-connector'
    import {  arweaveObject  } from './arweavehelper'
    let loginButton='Login'
 


async function walletlogin() {
  if (browser) {
      console.log('****  arweaveWallet Browser')
      const wallet = new ArweaveWebWallet({
        name: 'Archivist_CR',
        logo: '/images/door.jpg'  //  `${window.location.origin}/data/door.jpg`    // `https://imgur.com/a/2RaXObI`  
      })
      wallet.setUrl('arweave.app')
      const result = await  wallet.connect()  //  chrome allow  popup https://support.google.com/chrome/answer/95472?hl=en&co=GENIE.Platform%3DDesktop
      document.cookie = `auth=${result}`   //todo add expires
      loginButton='Logged in(prod)'
      document.getElementById('addanchor').classList.remove("disable-click")

  }
}
</script>

 <p>SvelteKit API endpoints for Arweave</p>

 <div class="flex space-x-8">
  <button  class="btn"
    on:click={async () => {   walletlogin() 

    }}>{loginButton}</button
  >
</div>



<style>
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
  width: 200px;



}
 </style>

 

