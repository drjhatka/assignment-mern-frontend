import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { JWTTokenUser, TAuthState } from '../../types/types';
import { createSlice } from './../../../node_modules/@reduxjs/toolkit/src/createSlice';

const initialState:TAuthState = {
    user:null,
    token:null
}
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state, action: PayloadAction<TAuthState>)=>{
            const {user, token} = action.payload;
            state.user = user;
            state.token = token;
        }
    }
})

export const  {setUser} = authSlice.actions
export default authSlice.reducer