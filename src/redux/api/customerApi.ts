import baseApi from "./baseApi"

export const customerApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createUser:builder.mutation({
            query:(userInfo)=>({
                url:'/users/create-customer',
                method:"POST",
                body:userInfo
            })
        }),
        getUser: builder.query({
            query:(email)=>`/users/${email}`
        })
    })
})

export const { useCreateUserMutation, useGetUserQuery }=customerApi
