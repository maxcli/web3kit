// who am i?
export const GET= async  ({ locals}) =>{
    
    return new Response(locals.user);
}

 