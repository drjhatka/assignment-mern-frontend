import { Bike } from "../../types/types"
import baseApi from "./baseApi"

export const bikeApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createBike:builder.mutation({
            query:(userInfo)=>({
                url:'/users/create-customer',
                method:"POST",
                body:userInfo
            })
        }),
        getBikes: builder.query({
            query: (queryString) => `/bikes?searchTerm=${queryString.searchTerm}&category=${queryString.category}&brand=${queryString.brand}&price=${queryString.price}`
        }),
        getBike: builder.query({
            query:(productId)=>`/bikes/${productId}`
        }),

        updateBike: builder.mutation({
            query:({updatedBike, bikeId})=>({
                url:`/bikes/${bikeId}`,
                method:"PUT",
                body:updatedBike
            })
         })
    })
})

export const { useCreateBikeMutation, useGetBikesQuery, useGetBikeQuery, useUpdateBikeMutation }=bikeApi
