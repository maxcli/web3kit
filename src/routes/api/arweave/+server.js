import { API_KEY } from '$env/static/private'; // secret, not exposed on client.
//console.log('****** API KEY:',API_KEY)

export const GET= async  ({request,url}) =>{
    const authHeader=request.headers.get('Authorization')
   //console.log('****** authHeader:',  authHeader )

    if(authHeader!='MyAuthHeader')
    {
        return new Response( JSON.stringify ({message: "Invalid Auth Credentials"}), {status:401}  )
    }

    const limit=Number(url.searchParams.get('limit') ?? '10')
    const skip=Number(url.searchParams.get('skip') ?? '0')



    const res=await fetch( `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)    //template string  [::1]:5173/api/posts?limit=10&skip=10
    const data =await res.json() 

    return new Response(JSON.stringify (data), {status:200}    )
}


//
//  [::1]:5173/api/arweave
//  plus header 'Authorization'
export const POST  = async  ({request}) =>{
    const authHeader=request.headers.get('Authorization')
 
 
     if(authHeader!='MyAuthHeader')
     {
         return new Response( JSON.stringify ({message: "Invalid Auth Credentials"}), {status:401}  )
     }
    const body=await request.json()
    console.log('****** post body:',  body )
    return new Response( JSON.stringify ({message: "Success"}), {status:201}  )   // 201=created
}