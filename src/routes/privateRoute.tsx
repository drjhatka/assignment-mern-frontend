
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    //check user authentication
    const token = localStorage.getItem('token')
    if(token===null){
        return <Navigate to='/login' replace></Navigate>  
    }
    return children
};

export default PrivateRoute;