export const load =({fetch,params}) => {

    console.log(params) //ex { artxid: '13' }

    const fetchProduct=async (txid) => {

        const res=await fetch(`/api/arweave/${txid}`)  //template literal
        const data=await res.json()
        return data
    }

    return {
        product: fetchProduct(params.artxid)
    }
}

