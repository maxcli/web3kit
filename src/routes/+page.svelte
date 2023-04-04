<script>
 
    import {PUBLIC_COOKIE_DURATION_SECONDS} from '$env/static/public'
    import { browser } from '$app/environment'
    import {page} from '$app/stores'
    import { ArweaveWebWallet } from 'arweave-wallet-connector'

    let loginButton='Login'


    async function walletlogin() {
      if (browser) {
     
        console.log('***cookie seconds:', PUBLIC_COOKIE_DURATION_SECONDS)
      
        const wallet = new ArweaveWebWallet({
            name: 'Archivist_CR',
            logo: `https://jfbeats.github.io/ArweaveWalletConnector/placeholder.svg` //'/images/door.jpg'    
        })
          wallet.setUrl('arweave.app')
          const result = await  wallet.connect()  //  chrome allow  popup https://support.google.com/chrome/answer/95472?hl=en&co=GENIE.Platform%3DDesktop
       
          document.cookie = `auth=${result};max-age={PUBLIC_COOKIE_DURATION_SECONDS}`  // cookie lifespan -seconds 
          loginButton='Logged in(prod)'
          document.getElementById('addanchor').classList.remove("disable-click")
          document.getElementById('itemanchor').classList.remove("disable-click")

          

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

 

