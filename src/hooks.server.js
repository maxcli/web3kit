export async function handle({ event, resolve }) {

    if (event.url.pathname.startsWith('/custom')) {
      return new Response('custom response');
    }
   //stage 1
    event.locals.something ='data from hooks'

    const response = await resolve(event);   //stage 2

    response.headers.set('x-custom-header', 'potato');
     //stage 3
    return response;
  }