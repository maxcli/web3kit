import { error } from '@sveltejs/kit';

export const load=({ fetch,cookies}) =>{

    const fetchPosts=async() =>{

        const response=await fetch('/api/arweave',{

            headers: {
                'Authorization': `ArchivistAuthHeader`
            }
        })
        if (response.ok)
        {
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
      //response.headers.set('x-custom-header', 'potato');

    return {
        posts:fetchPosts()
    }
    
}