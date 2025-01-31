import { Order, Product, ProductOrder } from "../../types/types"
import baseApi from "./baseApi"

export const orderApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(orderInfo:ProductOrder)=>({
                url:'/orders',
                method:"POST",
                body:orderInfo
            })
        }),
        getOrder: builder.query({
            query:(id)=>`/bikes?searchTerm=${id}`
        }),
        getOrders: builder.query({
            query:(productId)=>`/bikes/${productId}`
        }),

    })
})

export const { useCreateOrderMutation, useGetOrderQuery, useGetOrdersQuery }=orderApi
export default orderApi.reducer
