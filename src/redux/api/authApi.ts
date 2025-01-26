import  baseApi  from "./baseApi";

//const baseQuery = {}

const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:"POST",
                body:userInfo
            })
        }),
        logout:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/logout',
                method:'POST',
                body:userInfo
            })
        })
    })
})
export const { useLoginMutation, useLogoutMutation }=authApi
export default authApi;
