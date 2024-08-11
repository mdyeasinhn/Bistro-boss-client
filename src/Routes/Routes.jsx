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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: 'cart',
        element: <Cart />
      },
      // Admin only routes
      {
        path: 'users',
        element : <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: 'addItems',
        element : <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: 'manageItmes',
        element : <AdminRoute><ManageItmes/></AdminRoute>
      }
    ]
  }
]);
