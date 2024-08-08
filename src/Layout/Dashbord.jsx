import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashbord = () => {
    const [cart] = useCart();
    const [isAdmin ]= useAdmin();
    return (
        <div className="flex ">
            {/* deshbord side bar */}
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                             <li>
                        <NavLink to='/dashbord/adminHome'>
                            <FaHome />
                            Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/addItmes '>
                            <FaUtensils />
                          Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/manageItmes'>
                            <FaList />
                                Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/bookings'>
                            <FaBook />
                           Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/users'>
                            <FaUsers />
                         All  Users
                        </NavLink>
                    </li>

                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashbord/userHome'>
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashbord/reservation '>
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashbord/cart'>
                                        <FaShoppingCart />
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashbord/review'>
                                        <FaShoppingCart />
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashbord/bookings'>
                                        <FaList />
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* shared nav links*/}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <CiMenuBurger></CiMenuBurger>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/contact'>
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </div>
            {/* deshbord content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;