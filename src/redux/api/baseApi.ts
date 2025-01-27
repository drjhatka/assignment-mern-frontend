import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000/api', 
    credentials:'include',
    prepareHeaders:(header, { getState })=>{
        const token = (getState() as RootState).auth.token;
        if(token){
            header.set('authorization', token)
        }
        return header
    }
})

const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery:baseQuery,
    endpoints:()=>({}),
})

export default baseApi