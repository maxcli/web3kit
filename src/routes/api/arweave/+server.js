//import { API_KEY } from '$env/static/private' 
import Arweave from 'arweave'

export const GET= async  ({request,url}) =>{     
    const arweave = Arweave.init({
        host: import.meta.env.VITE_ARWEAVE_HOST || 'arweave.net',
        port: import.meta.env.VITE_ARWEAVE_PORT || 443,
        protocol: import.meta.env.VITE_ARWEAVE_PROTOCOL || 'https'
    })
    
    const authHeader=request.headers.get('Authorization')
    //console.log('****** authHeader:',  authHeader )
 
    if(authHeader!='ArchivistAuthHeader')    
    {
        return new Response( JSON.stringify ({message: "Invalid Auth Credentials"}), {status:401}  )
    }
  
    //todo pass protocol as paramter from config
      const result = await arweave.api.post('graphql', {
      query: `
    query {
        transactions (first: 100 , tags: { name: "Protocol", values: [ "Archivist_CR"] })  {
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

        //console.log('*** Activity.after ql results:',result)
        //console.log('after ql result status:',result.status)   //200
        const data= result?.data?.data?.transactions?.edges

        //console.log('*** Server JS data:',data )

        return new Response(JSON.stringify (data), {status:200}    )

 
}
 