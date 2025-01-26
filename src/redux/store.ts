import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../redux/customer/customerSlice'
import authReducer from './auth/authSlice'
import baseApi from "./api/baseApi";
export const store= configureStore({
    reducer:{
        customer: customerReducer,
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch