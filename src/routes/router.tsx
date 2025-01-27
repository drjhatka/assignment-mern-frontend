import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CustomerDashboard from "../pages/customers/CustomerDashboard";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<PrivateRoute><CustomerDashboard></CustomerDashboard></PrivateRoute>
            }
        ]
    },
    {
        path:'/admin',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<AdminDashboard></AdminDashboard>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>,
        
    },
    
    {
        path:'/register',
        element:<Register/>,
        
    },
])

