<script>
    import { onMount } from 'svelte'
    import { browser } from '$app/environment'
    import {page} from '$app/stores'
    import { ArweaveWebWallet } from 'arweave-wallet-connector'
    import {  arweaveObject  } from './arweavehelper'
 
    onMount(async () => {
      console.log('**** reach onmount')
      const wallet = new ArweaveWebWallet({
        name: 'Archivist_CR',
        logo: `https://imgur.com/a/2RaXObI`//  `${window.location.origin}/static/door.jpg`    // `https://imgur.com/a/2RaXObI`  
      })
    
      console.log('****  arweaveWallet before connect. wallet:',wallet)

      wallet.setUrl('arweave.app')
      const result = await  wallet.connect()  //  chrome allow  popup https://support.google.com/chrome/answer/95472?hl=en&co=GENIE.Platform%3DDesktop
      document.cookie = `auth=${result}`   //todo add expires
      console.log('****  arweaveWallet after connect. result:', result)

      if (window.arweaveWallet==undefined){
        console.log('**** window.arweaveWallet is undefined')
      }
  })
</script>

 <p>SvelteKit API endpoints for Arweave</p>
 <!--
{#if $page.data.user}
     
    Welcome {$page.data.user.address}

{/if}
-->

 

 

