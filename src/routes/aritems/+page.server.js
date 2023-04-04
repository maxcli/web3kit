import { error } from '@sveltejs/kit';

export const load=({ fetch,cookies}) =>{

    const fetchARItems=async() =>{

        const response=await fetch('/api/arweave',{

            headers: {
                'Authorization': `ArchivistAuthHeader`,   
                'content-type': 'application/json'
            }
        })
        if (response.ok)
        {
            //console.log('***** aritems fetch response :',      response )
            const data =await response.json()      
            return data 
        }
        else {
            alert("HTTP-Error: " + response.status);
          }
    }
    


    const authCookie =  cookies.get('auth')
   
    if (!authCookie) {
        throw error(401, 'not logged in');
        return null
      }
 

    return {
        aritems:fetchARItems()
    }
    
}