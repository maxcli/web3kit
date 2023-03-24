export const authenticateUser =  (event ) => {

    const {cookies}=event
    const userToken=cookies.get("auth")

   // console.log('**** auth user usertoken:',userToken)

    //if (userToken=="regularusertoken"){

    const user={
            id:1, address:userToken, role:"USER"

        }
    return user
}