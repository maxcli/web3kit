export const load =({fetch,params}) => {

    console.log('** artxid/page.js params:',params) //ex { artxid: '13' }

    const fetchProduct=async (txid) => {


        //console.log('**artxid:',txid) 
        const res=await fetch(`/api/arweave/${txid}` ,
        {    headers: {
            'Authorization': `ArchivistAuthHeader`
        }})   
        
        const data=await res.json()
        return data
    }

    return {
        arrecord: fetchProduct(params.artxid)
    }
}

