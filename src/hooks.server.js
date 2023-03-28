

import { authenticateUser } from './lib/authenticateUser';

export async function handle({ event, resolve }) {

    if (event.url.pathname.startsWith('/smile')) {
      return new Response('😄')
    }
    
   //stage 1
     

    event.locals.user=   authenticateUser(event)  // needed?



    const response = await resolve(event);   //stage 2

     //stage 3
    return response;

    
  }