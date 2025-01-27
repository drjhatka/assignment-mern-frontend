
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';



const PrivateRoute = ({children}:{children:ReactNode}) => {
    //check user authentication
    const token = useSelector((state:RootState)=>state.auth.token)
    if(token===null){
        return <Navigate to='/login' replace></Navigate>  
    }
    return children
};

export default PrivateRoute;