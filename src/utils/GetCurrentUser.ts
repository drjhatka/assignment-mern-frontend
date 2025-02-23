import { useSelector } from "react-redux"
import { JWTTokenUser } from "../types/types"
import { RootState } from "../redux/store"
import { useGetSingleUserByIdQuery, useGetSingleUserQuery } from "../redux/api/customerApi"


export const GetCurrentUser=()=>{
    const userState: JWTTokenUser | null = useSelector(
        (state: RootState) => state.auth.user
      ) as JWTTokenUser
     // console.log('emaik ', userEmail)
    const {data:user, isLoading}= useGetSingleUserQuery(userState.email)
    console.log('CUrrent ', user)
    return {user, isLoading}
}

export const getUserName = (userId:string)=>{
    const {data:user, isLoading}= useGetSingleUserByIdQuery(userId)
    return user
}