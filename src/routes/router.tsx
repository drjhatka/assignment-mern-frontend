import { createBrowserRouter } from 'react-router-dom'
import AdminDashboard from '../pages/admin/AdminDashboard'
import MainLayout from '../layout/MainLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import PrivateRoute from './privateRoute'
import Dashboard from '../pages/Dashboard'
import ShowAllBikes from '../pages/bikes/ShowAllBikes'
import ViewDetails from '../pages/bikes/ViewDetails'
import OrderBike from '../components/OrderBike'
import CartHome from '../pages/Cart/CartHome'
import UpdateBikeForm from '../pages/admin/UpdateProduct'
import AddBike from '../pages/admin/AddBike'
import ManageProduct from '../pages/admin/ManageProduct'
import ManageUsers from '../pages/admin/ManageUsers'
import ViewOrders from '../pages/admin/ViewOrders'
import StripeContainer from '../components/stripe/CheckoutPage'
import PaymentForm from '../components/stripe/CheckoutForm'
import CheckoutPage from '../components/stripe/CheckoutPage'
import CheckoutForm from '../components/stripe/CheckoutForm'
import PaymentRedirect from '../components/stripe/PaymentRedirect'
import MyOrders from '../pages/orders/MyOrders'
import ShowProfile from '../pages/customers/ShowProfile'
import UpdateProfile from '../pages/customers/UpdateProfile'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        )
      },
      {
        path: 'bikes',
        element: <ShowAllBikes></ShowAllBikes>
      },
      {
        path: 'bikes/:productId',
        element: <ViewDetails></ViewDetails>
      },
      {
        path: 'bikes/update/:productId',
        element: <UpdateBikeForm></UpdateBikeForm>
      },
      {
        path: 'order/:productId',
        element: <OrderBike></OrderBike>
      },
      {
        path: 'cart/',
        element: <CartHome></CartHome>
      },
      {
        path: 'bikes/add-bike',
        element: <AddBike></AddBike>
      },
      {
        path: 'bikes/manage-bikes',
        element: <ManageProduct></ManageProduct>
      },
      {
        path: 'users/manage-user',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'orders/view-orders',
        element: <ViewOrders></ViewOrders>
      },
      {
        path: 'payment/checkout/:amount',
        element: <CheckoutPage />
      },
      {
        path: 'payment-success/:amount',
        element: <PaymentRedirect />
      },
      {
        path: 'my-orders',
        element: <MyOrders></MyOrders>
      },
      {
        path: 'show-profile',
        element: <ShowProfile />
      },
      {
        path: 'update-profile',
        element: <UpdateProfile />
      }
    ]
  },

  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])
