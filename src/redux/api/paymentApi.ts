import baseApi from "./baseApi"

export const paymentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getClientSecret:builder.query({
            query:(amount)=>({
                url:`/payment/${amount}`,
                method:"GET",
            })
        }),
    })
})

export const { useGetClientSecretQuery }=paymentApi
