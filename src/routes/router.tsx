import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CustomerDashboard from "../pages/customers/CustomerDashboard";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<CustomerDashboard></CustomerDashboard>
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
        
    }
])