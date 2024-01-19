import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const RouteGards = ({ children }) => {

    const user = useSelector((state) => state.auth.user);


    if (user.accessToken === undefined) {
        return <Navigate to='/login' ></Navigate>
    }

    return children ? children : <Outlet />
}

export default RouteGards;