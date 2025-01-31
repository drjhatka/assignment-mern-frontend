import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./privateRoute";
import Dashboard from "../pages/Dashboard";
import ShowAllBikes from "../pages/bikes/ShowAllBikes";
import ViewDetails from "../components/ViewDetails";
import OrderBike from "../components/OrderBike";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'bikes',
                element:<ShowAllBikes></ShowAllBikes>
            },
            {
                path:'bikes/:productId',
                element:<ViewDetails></ViewDetails>
            },
            {
                path:'order/:productId',
                element:<OrderBike></OrderBike>
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

