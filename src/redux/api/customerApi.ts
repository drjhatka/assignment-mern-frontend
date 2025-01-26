import baseApi from "./baseApi"

export const customerApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createUser:builder.mutation({
            query:(userInfo)=>({
                url:'/users/create-customer',
                method:"POST",
                body:userInfo
            })
        })
    })
})

export const { useCreateUserMutation, }=customerApi
