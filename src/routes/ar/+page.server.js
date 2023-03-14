import Arweave from 'arweave'


const arweave = Arweave.init({
    host: import.meta.env.VITE_ARWEAVE_HOST || 'arweave.net',
    port: import.meta.env.VITE_ARWEAVE_PORT || 443,
    protocol: import.meta.env.VITE_ARWEAVE_PROTOCOL || 'https'
})
/*
export const  arweaveUrl = `${import.meta.env.VITE_ARWEAVE_PROTOCOL || "https"}://${  import.meta.env.VITE_ARWEAVE_HOST || "arweave.dev"   }:${import.meta.env.VITE_ARWEAVE_PORT || "443"}`;
console.log('****  arweaveUrl:',arweaveUrl)

  //************ Activity :read transactions  *********************************************
  export const activity = async () => {
  
    try{
      const result = await arweave.api.post('graphql', {
      query: `
    query {
        transactions (first: 100 , tags: { name: "Protocol", values: [ "Archivist_CR"] })  {
        edges {
            node {
            id
            tags {
                name
                value
            }
            }
        }
        }
        }
        `
        })

        console.log('*** Activity.after ql results:',result)
        console.log('after ql result status:',result.status)   //200
     

        return result?.data?.data?.transactions?.edges
    }
    catch(e){
  
        console.log(e)
        return []
    }
  }


  */