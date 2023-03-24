import { ArweaveWebWallet } from 'arweave-wallet-connector'
import Arweave from 'arweave'

export let addr=''
export let ar_balance=0

//todo move into a client LOAD or client layout?

export const arweaveObject = Arweave.init({
  host: import.meta.env.VITE_ARWEAVE_HOST || 'arweave.net',
  port: import.meta.env.VITE_ARWEAVE_PORT || 443,
  protocol: import.meta.env.VITE_ARWEAVE_PROTOCOL || 'https'
})

export const  arweaveUrl = `${import.meta.env.VITE_ARWEAVE_PROTOCOL || "https"}://${  import.meta.env.VITE_ARWEAVE_HOST || "arweave.dev"   }:${import.meta.env.VITE_ARWEAVE_PORT || "443"}`;



    //************Connect **********************************************/
 export const connect = async () => {
    const wallet = new ArweaveWebWallet({
      name: 'Archivist_CR',
      logo:  `https://imgur.com/a/2RaXObI` //`${window.location.origin}/door.jpg`   
    })
  
    wallet.setUrl('arweave.app')
    const result = await  wallet.connect()  //pop up user form. get back address

    if (window.arweaveWallet==undefined){
      console.log('**** window.arweaveWallet is undefined')
    }

    addr=  await   arweaveObject.wallets.jwkToAddress(result)

    console.log('**** arweave Wallet address:',addr)
    return  result    
  
  }


      //************ GET Balance  **********************************************/
      export  async function getBalance(addr) {

          let winston = await  arweaveObject .wallets.getBalance(addr)
          let ar =  arweaveObject .ar.winstonToAr(winston);
          return ar
      
        }

          //************  SUBMIT **********************************************/
  export const submit = async ({  data, tags }) => { 
    try {
          if (window.arweaveWallet==undefined){
            return {ok:false,message:'Prod Wallet not connected'}
          }
    }
    catch (e) {
          console.log('****Create Tx error:', e)
          return {ok:false, message: e}
    }
  } 
    