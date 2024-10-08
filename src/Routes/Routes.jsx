import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Pages/Dashbord/Cart/Cart";
import AllUsers from "../Pages/Dashbord/AllUsers/AllUsers";
import AddItems from "../Pages/Dashbord/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItmes from "../Pages/Dashbord/ManageItmes/ManageItmes";
import UpdateItems from "../Pages/Dashbord/UpdateItems/UpdateItems";
import { Parallax } from "swiper/modules";
import Payment from "../Pages/Dashbord/Payment/Payment";
import PaymentHistory from "../Pages/Dashbord/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashbord/UserHome/UserHome";
import AdminHome from "../Pages/Dashbord/AdminHome/AdminHome";
import ErrorElement from "../Components/ErrorElement/ErrorElement";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order/:category',
        element: <Order />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ]
  },
  {
    path: "/dashbord",
    element: <PrivateRoute><Dashbord /></PrivateRoute>,
    children: [
      // normal user routes
      {
        path :'userHome',
        element : <UserHome/>
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'paymentHistory',
        element : <PaymentHistory/>
      },
      // Admin only routes
      {
        path: 'adminHome',
        element : <AdminRoute><AdminHome/></AdminRoute>
      },
      {
        path: 'users',
        element : <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: 'addItems',
        element : <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element :<AdminRoute><UpdateItems/></AdminRoute>,
        loader: ({params}) => fetch(`https://bistro-boss-server-dusky-theta.vercel.app/menu/${params.id}`)
   
      },
      {
        path: 'manageItmes',
        element : <AdminRoute><ManageItmes/></AdminRoute>
      }
    ]
  }
]);
