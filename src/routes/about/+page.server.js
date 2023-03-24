import { error } from '@sveltejs/kit';
export const load = async ({ cookies ,locals}) => {

    if (!locals.user) {
        throw error(401, 'not logged in');
      }

    //  console.log('** locals.user:',  locals.user)
    // console.log('** authcookie:',  cookies.get('auth'))

    const authCookie =  cookies.get('auth')

 
    return { authCookie : authCookie}
}