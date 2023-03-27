export const load=({fetch}) =>{

    const fetchPosts=async() =>{
        const response=await fetch('/api/arweave')
        if (response.ok)
        {
            const data =await response.json()      
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