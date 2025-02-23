import { Order } from "../../types/types"
import baseApi from "./baseApi"

export const orderApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(orderInfo:Partial<Order>)=>({
                url:'/orders',
                method:"POST",
                body:orderInfo
            })
        }),
        getAllUserOrders: builder.query({
            query:()=>`/orders`
        }),
        getOrder: builder.query({
            query:(userEmail)=>`/orders/${userEmail}`
        }),
        getOrders: builder.query({
            query:(orderId)=>`/orders/${orderId}`
        }),

    })
})

export const { useCreateOrderMutation, useGetOrderQuery, useGetOrdersQuery, useGetAllUserOrdersQuery }=orderApi
export default orderApi.reducer
