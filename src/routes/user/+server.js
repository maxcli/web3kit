// who am i? show the walet address. ex mhbYHN2zehYlqAVXPrEiY1AFwnXuLvKuSRxilSBkcgQ
export const GET= async  ({ locals}) =>{
    
    return new Response(locals.user.address);
}

 