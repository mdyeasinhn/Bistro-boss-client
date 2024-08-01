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
      {
        path: 'cart',
        element: <Cart />
      },
      // Admin routes
      {
        path: 'users',
        element : <AllUsers/>
      }
    ]
  }
]);
