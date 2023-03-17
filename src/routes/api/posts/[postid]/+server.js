export const GET= async  ({params}) =>{
     
    //route [::1]:5173/api/posts/15

const res=await fetch(`https://dummyjson.com/posts/${params.postid}`)
const data=await res.json()
    return new Response(JSON.stringify (data)  )
}
