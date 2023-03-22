export const load=({fetch}) =>{

    const fetchProducts=async() =>{
        const productRes=await fetch('https://dummyjson.com/products?limit=10')
        const productData =await productRes.json()
        return productData.products
    }

    const fetchUsers=async() =>{
        const usersRes=await fetch('https://dummyjson.com/users?limit=10')
        const userData =await usersRes.json()
        return userData.users
    }
    
    return {
         products: fetchProducts() ,  //handle unrelated fetch requests . both return promise,  waterfall sync blocking.
         users: fetchUsers()
    }
    
    }