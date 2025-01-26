import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { TAuthState, TUser } from '../../types/types';
import { createSlice } from './../../../node_modules/@reduxjs/toolkit/src/createSlice';

const initialState: TUser = {
    name:'',
    email:'',
    password:'',
    isDeleted:false,
    role:'customer',
    status:'active'
}

export const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        createUser:(state, action: PayloadAction<TUser>)=>{
            
        }
    }
})

export default customerSlice.reducer