import { error } from '@sveltejs/kit';
import { arweaveUrl,getBalance} from '../arweavehelper'
export const load = async ({ cookies ,locals}) => {
    let addr =   cookies.get('auth') 
    let balance='0'
    if (addr ){
        balance=await getBalance(addr)
    }
    return {

        user:{
            authCookie :  cookies.get('auth') ,
            balance : balance

    
        }
    }
}

 