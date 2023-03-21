export const load=({fetch}) =>{

    const fetchPosts=async() =>{
        const response=await fetch('/api/arweave')
        if (response.ok)
        {
            const data =await response.json()
       //     console.log('*** aritem page.js data:',data)
         
            return data 
        }
        else {
            alert("HTTP-Error: " + response.status);
          }
    }
    
    return {
        posts:fetchPosts()
    }
    
}