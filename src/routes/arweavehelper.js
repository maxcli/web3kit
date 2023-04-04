import { ArweaveWebWallet } from 'arweave-wallet-connector'
import Arweave from 'arweave'

import {PUBLIC_ARWEAVE_PORT} from '$env/static/public'
import {PUBLIC_ARWEAVE_PROTOCOL} from '$env/static/public'
import {PUBLIC_ARWEAVE_HOST} from '$env/static/public'

PUBLIC_ARWEAVE_PROTOCOL

export let addr=''
export let ar_balance=0

//todo move into a client LOAD or client layout?

export const arweaveObject = Arweave.init({
  host:  PUBLIC_ARWEAVE_HOST,
  port:  PUBLIC_ARWEAVE_PORT  ,
  protocol: PUBLIC_ARWEAVE_PROTOCOL
})

export const  arweaveUrl = `${PUBLIC_ARWEAVE_PROTOCOL}://${  PUBLIC_ARWEAVE_HOST}:${ PUBLIC_ARWEAVE_PORT}`;

  //console.log('**** arweave URL :', arweaveUrl )



      //************ GET Balance  **********************************************/
      export  async function getBalance(addr) {

          let winston = await  arweaveObject .wallets.getBalance(addr)
          let ar =  arweaveObject .ar.winstonToAr(winston);
          //console.log('**** ar typeof:',(typeof(ar))))
          return ar.toString()
      
        }

          //************  SUBMIT **********************************************/
  export const submit = async ({  wallet_mode, data, tags }) => { 
    try {

      if (wallet_mode =='dev')
      {}
      else{


          if (window.arweaveWallet==undefined){
            return {ok:false,message:'Prod Wallet not connected'}
          }
          console.log('****submit create tx');
          let tx=await arweaveObject.createTransaction({ data:  data });
          
          tags.map(({name,value}) => tx.addTag(name,value))
          tx.addTag('Timestamp',  new Date().toISOString());
          await arweaveObject.transactions.sign(tx)  
          console.log('**** prod. tx id:',tx.id)
          let arreward = arweaveObject.ar.winstonToAr(tx.reward);  
          let  ar_balance=await getBalance(
            await window.arweaveWallet.getActiveAddress()
          )
         
          console.log('**** prod balance:',ar_balance)
          console.log('**** prod  reward ',arreward)
          
          if(Number(arreward)>Number(ar_balance)){
            return {ok:false,message:'PROD wallet. Not enough Ar in wallet!' }
          }
          const uploader=await arweaveObject.transactions.getUploader(tx)
          return {ok:true,  uploader:uploader , txId:tx.id} //happy path. return unloader.
        }
    }
    catch (e) {
          console.log('****Create Tx error:', e)
          return {ok:false, message: e}
    }
  }
  
    //************ Wait FOR **********************************************/

    export const waitfor = async (txId) => {
      let count = 0;
      let foundPost = null;
    
      while (!foundPost) {
        count += 1;
        console.log(`attempt ${count}`);
        await delay(2000 * count);
        const result = await arweaveObject.api.post('graphql', {
          query: `
    query {
      transaction(id: "${txId}") {
        id
      }
    }
        `}).catch(e => {
            return ({
              data: { data: { transaction: null } }
            })
          });
        if (result.data.data.transaction) {
          foundPost = result.data.data.transaction.id === txId;
        }
        if (count > 10) {
          break; // could not find post
        }
      }
      return foundPost
    }

    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    