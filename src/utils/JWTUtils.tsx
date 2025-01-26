import { jwtDecode } from "jwt-decode"

export const verifyAndDecodeToken = ((token:string)=>{
    const decodedToken = jwtDecode(token);
    // if(decodedToken){
    //     //req.user = decodedToken
    // }
    return decodedToken
})