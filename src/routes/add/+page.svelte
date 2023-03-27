<script>
    import { error } from '@sveltejs/kit';
    import { debug } from 'svelte/internal';
    import { goto } from '$app/navigation';
    import {  submit, waitfor } from "../arweavehelper.js";
    let fileInput;
    let files;
    let avatar
    let  description
    let img_name
    let img_content_type
    let errorMsg
    let wallet_mode ='prod'

    function getBase64(image) {

        img_content_type=image.type
        img_name=image.name
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result;         
            uploadFunction(e.target.result);
        };
    };

    async function uploadFunction(imgBase64) {
       
       const imgData = imgBase64.split(',');
       let base64String= imgData[1]    //can sucessful paste into https://codebeautify.org/base64-to-image-converter
       const data = Uint8Array.from(window.atob(base64String), (v) => v.charCodeAt(0));  //convert to byte array

       // createTags
       const tags = [
           { name: "Content-Type", value: img_content_type},    
           { name: "Title", value:img_name },                
           { name: "Description",value:description },       
           { name: "App-Name",value:"Your Company Name" },    
           { name: "Protocol",value:"Archivist_CR" },  
           { name: "License",value:"txid of license definition-Future" },                
       ];

debug

       try {
           
           const { ok, uploader, txId, message } = await submit({ wallet_mode  , data, tags })  

           if (!ok) {
               if (message.includes("jwk")) {
                   errorMsg =   "jwk error. Could not find wallet, please make sure your wallet is connected.";
               } else {
                   errorMsg =  message;
               }
               console.log('****Add.submit failure, error:',errorMsg); 
               throw error(401, `**submit error:${errorMsg}`);
               return;
           } 


         
           
          
           // show upload progress
           while (!uploader.isComplete) {

               await uploader.uploadChunk();
               console.log('Upload Loop  % complete ' , uploader.pctComplete ) //}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}' );
           }

           let verifyTxID=await waitfor(txId);  //tries 10x
           if (verifyTxID==null ){
               console.log('********Upload Fatal error. cannot verify tx id  :',txId);
           }
           else{
               console.log('********Upload verified tx id  :',txId);
           }
           goto("/aritems/"+txId)
     
   }
   catch(e){
       if (e.message.includes("410")) {
           errorMsg = "410 Error. Could not publish transaction, please verify you have enough AR";  //if not enough AR in wallet 
           console.log('****submit 410 error:',errorMsg);
           throw error(410, `**submit error:${errorMsg}`);
       }
       console.log('****submit error:',e);
     

   }
   
}


</script>

<h1>Add Item</h1>
<p/>
<div   class="ex2">

     <p/>

    <div id='parent'>
        <label id='caption2'   for="description">Description  </label>
        <input  id="description" type='text'    class="textfocus"   bind:value={description}         />
    </div>

    <p/>
    <p style="text-align:center;">
    {#if avatar}
        <img id="avatar"  src={avatar} alt="avatar"  />
    {:else}
        <img id="avatar" src="/images/door.jpg" alt="avatar"/>
    {/if}
    </p>
    <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpg"  bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
    <div class="text-center">
        <button   class="upload-btn"on:click={ () => fileInput.click() }>Upload</button>
        
    </div>
    <p/>
</div>


<style>

.textfocus:focus {
    border-color: #dc4f21;
    box-shadow: 0 0 2px #dc4f21;
    background: yellow;
    color: blue;
}


    .text-center {
    text-align: center;
    }
    
    div.ex2 {
    max-width: 600px;
    margin: auto;
    border: 3px solid #73AD21;
    }

    label {
    width: 20%;
    text-align: center;
    }

    input {
    height: 35px;
    width: 80%;
    }

    #parent {
    display: flex;
    align-items: center;
    }


    h1 {
        border-style: none;
        outline:0;
        text-align:center;
 
	}


    #avatar {
        border-radius: 99999px;
        height: 128px;
        width: 128px;
        margin-bottom: 10px;
    }

    .hidden {
        display: none;
    }

    button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
}

    .upload-btn {
        width: 128px;
        height: 32px;
        background-color: black;
        font-family: sans-serif;
        color: white;
        font-weight: bold;
        border: none;  /* loose dashed blue border*/
        outline:0;     /* loose dashed blue border*/
    }

    .upload-btn:hover {
        background-color: white;
        color: black;
        outline: black solid 2px;
        border: none;  
    }
</style>