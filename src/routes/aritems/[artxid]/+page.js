export const load =({fetch,params}) => {

    console.log(params) //ex { artxid: '13' }

    const fetchProduct=async (txid) => {

        const res=await fetch(`https://dummyjson.com/products/${txid}`)
        const data=await res.json()
        return data
    }

    return {
        product: fetchProduct(params.artxid)
    }
}

