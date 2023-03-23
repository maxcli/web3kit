import  {RequestEvent} from "@sveltejs/kit"

export const authenticateUser =  (event ) => {

    const {cookies}=event
    const userToken=cookies.get("auth")

    if (userToken=="regularusertoken"){

        const user={
            id:1, email:"someone@nothere.com" ,role:"USER"

        }
        return user

    }

    return null
}