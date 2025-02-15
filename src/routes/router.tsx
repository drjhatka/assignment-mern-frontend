import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./privateRoute";
import Dashboard from "../pages/Dashboard";
import ShowAllBikes from "../pages/bikes/ShowAllBikes";
import ViewDetails from "../pages/bikes/ViewDetails";
import OrderBike from "../components/OrderBike";
import CartHome from "../pages/Cart/CartHome";
import UpdateBikeForm from "../pages/admin/UpdateProduct";
import AddBike from "../pages/admin/AddBike";

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
                path:'bikes/update/:productId',
                element:<UpdateBikeForm></UpdateBikeForm>
            },
            {
                path:'order/:productId',
                element:<OrderBike></OrderBike>
            },
            {
                path:'cart',
                element:<CartHome></CartHome>
            },
            {
                path:'bikes/add-bike',
                element:<AddBike></AddBike>
            },
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

