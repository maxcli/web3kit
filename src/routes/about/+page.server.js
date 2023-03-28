import { error } from '@sveltejs/kit';
export const load = async ({ cookies ,locals}) => {


    const authCookie =  cookies.get('auth')
   
    /*if (!authCookie) {
        throw error(401, 'not logged in');
        return null
    }
    console.log('** authcookie:',   authCookie)
    */

 
    return { authCookie : authCookie}
}