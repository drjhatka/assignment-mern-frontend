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
        getUsers: builder.query({
            query: () => `/users/`
        }),
        getSingleUser: builder.query({
            query: (email) => `/users/${email}`
        }),
        
    })
})

export const { useCreateUserMutation, useGetUsersQuery, useGetSingleUserQuery }=customerApi
