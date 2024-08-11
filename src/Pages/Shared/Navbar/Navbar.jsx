import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => {
                console.error(err);
            })
    }
    const navlinks = <>
        <li > <Link to='/'><a>Home</a></Link></li>
        <li > <Link to='/menu'><a>Our Menu</a></Link></li>
        <li > <Link to='/order/salad'><a>Order Food</a></Link></li>
        <li>
            <Link to='/dashbord/cart'> <button className="">
             <FaShoppingCart className="mr-2 text-2xl "></FaShoppingCart>
                <div className="relative">
                <div className="badge badge-secondary absolute -top-8 left-4 ">+{cart.length}</div>
                </div>
            </button></Link>
        </li>
        {
            user ? <>
                <li onClick={handleLogOut}  > <Link to='/login' className="font-extrabold "><a>Sign Out</a></Link></li>
            </> :
                <>
                    <li > <Link to='/signup' className="font-extrabold "><a>sign up</a></Link></li>

                </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <ul className="">
                            <li>Bistro Boss</li>
                            <li className="text-black">Restaurant</li>
                        </ul>

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;