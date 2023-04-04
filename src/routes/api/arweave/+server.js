import Arweave from 'arweave'

import {PUBLIC_PROTOCOL} from '$env/static/public'
import {PUBLIC_ARWEAVE_PORT} from '$env/static/public'
import {PUBLIC_ARWEAVE_PROTOCOL} from '$env/static/public'
import {PUBLIC_ARWEAVE_HOST} from '$env/static/public'

export const GET= async  ({request,url}) =>{     
    const arweave = Arweave.init({
        host:  PUBLIC_ARWEAVE_HOST,
        port:  PUBLIC_ARWEAVE_PORT  ,
        protocol: PUBLIC_ARWEAVE_PROTOCOL
    })
    
    const authHeader=request.headers.get('Authorization')
    if(authHeader!='ArchivistAuthHeader')    
    {
        return new Response( JSON.stringify ({message: "Invalid Auth Credentials"}), {status:401}  )
    }
  
//        transactions (first: 100 , tags: { name: "Protocol", values: [ "Archivist_CR"] })  {

    //todo pass protocol as paramter from config
      const result = await arweave.api.post('graphql', {
      query: `
    query {
        transactions (first: 100 , tags: { name: "Protocol", values: [ "${PUBLIC_PROTOCOL}"] })  {
        edges {
            node {
            id
            tags {
                name
                value
            }
            }
        }
        }
        }
        `
        })

 
        const data= result?.data?.data?.transactions?.edges

      //  console.log('*** Server JS data:',data )

        return new Response(JSON.stringify (data), {status:200}    )

 
}
 