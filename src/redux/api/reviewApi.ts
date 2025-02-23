import baseApi from "./baseApi"

export const reviewApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        createReview:builder.mutation({
            query:(review)=>({
                url:'/review',
                method:"POST",
                body:review
            })
        }),
        getAllReviews: builder.query({
            query:(bikeId)=>`/review/${bikeId}`
        }),
        // getOrder: builder.query({
        //     query:(userEmail)=>`/orders/${userEmail}`
        // }),
        // getOrders: builder.query({
        //     query:(orderId)=>`/orders/${orderId}`
        // }),

    })
})
export const { useCreateReviewMutation, useGetAllReviewsQuery }=reviewApi
export default reviewApi.reducer