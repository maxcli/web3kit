export const authenticateUser =  (event ) => {

    const {cookies}=event
    const userToken=cookies.get("auth")

    

    if (userToken){
        //console.log('****  FOUND authenticateUser  usertoken:',userToken)

        const user={             id:1, address:userToken, role:"USER"        }
        return user
    }
    else{
      //  console.log('**** null authenticateUser  usertoken:',userToken)
        return null

    }
}