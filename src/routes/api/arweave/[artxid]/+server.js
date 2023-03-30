  import Arweave from 'arweave'
  
  export const GET= async  ({request,params}) =>{     
      const arweave = Arweave.init({
          host: import.meta.env.VITE_ARWEAVE_HOST || 'arweave.net',
          port: import.meta.env.VITE_ARWEAVE_PORT || 443,
          protocol: import.meta.env.VITE_ARWEAVE_PROTOCOL || 'https'
      })
      
      //console.log('****** GET TXID:',  params.artxid)

      const authHeader=request.headers.get('Authorization')
     // console.log('****** authHeader:',  authHeader )
   
      if(authHeader!='ArchivistAuthHeader')    
      {
          return new Response( JSON.stringify ({message: "Invalid Auth Credentials"}), {status:401}  )
      }
     

      //todo pass protocol as paramter from config
 



          const result = await arweave.api.post('graphql', {
            query: `
                query {
                    transaction(id: "${params.artxid}") {
         
                            id
                            owner {
                                address
                            }
                            tags {
                                name
                                value
                            }
                     
                }
              }
                `
          })


          //console.log('*** Get TXID result:',result)    // ie.          data: { data: { transaction: [Object] } },
      

          const data= result?.data?.data?.transaction    

          //console.log('*** Get TXID data:',  JSON.stringify (data))

          return new Response(JSON.stringify (data), {status:200}    )   
  }