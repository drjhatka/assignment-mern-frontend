import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { TAuthState } from '../../types/types';
import { createSlice } from './../../../node_modules/@reduxjs/toolkit/src/createSlice';
import persistStore from 'redux-persist/es/persistStore';
import { store } from '../store';


const initialState: TAuthState = {
    user: null,
    token: null
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<TAuthState>) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token')
        }
    }
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer