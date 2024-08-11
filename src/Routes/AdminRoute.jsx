import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

 
    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg "></span>
        </div>
    }
    if (user && isAdmin) {
        return children
    } else {

        return <Navigate to='/login' state={location.pathname} replace></Navigate>
    }
};

export default AdminRoute;