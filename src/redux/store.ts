import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../redux/customer/customerSlice'
import orderReducer from '../redux/api/orderApi'
import authReducer from './auth/authSlice'
import reviewReducer from './api/reviewApi'

import baseApi from "./api/baseApi";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'auth',
    storage,
  }

const persistAuthReducer = persistReducer(persistConfig,authReducer)

export const store= configureStore({
    reducer:{
        customer: customerReducer,
        order: orderReducer,
        //review: reviewReducer,
        auth: persistAuthReducer,
        //review: reviewRe
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)