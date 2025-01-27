import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },
    
    {
        path:'/register',
        element:<Register/>,
        
    },
    {
        path:'/login',
        element:<Login/>,
        
    },
])

