import baseApi from "./baseApi"

export const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBike: builder.mutation({
            query: (bikeInfo) => ({
                url: '/bikes/',
                method: "POST",
                body: bikeInfo
            })
        }),
        getBikes: builder.query({
            query: (queryString) => `/bikes?searchTerm=${queryString.searchTerm}&category=${queryString.category}&brand=${queryString.brand}&price=${queryString.price}`
        }),
        getBike: builder.query({
            query: (productId) => `/bikes/${productId}`
        }),

        updateBike: builder.mutation({
            query: ({ updatedBike, bikeId }) => ({
                url: `/bikes/${bikeId}`,
                method: "PUT",
                body: updatedBike
            })
        }),
        deleteBike: builder.mutation({
            query: (bikeId) => ({
                url: `/bikes/${bikeId}`,
                method: "DELETE",
            })
        }),
    })
})

export const {
    useCreateBikeMutation,
    useGetBikesQuery,
    useGetBikeQuery,
    useUpdateBikeMutation,
    useDeleteBikeMutation
} = bikeApi
