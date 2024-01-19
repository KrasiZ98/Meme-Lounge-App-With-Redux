
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthGards = ({ children }) => {

    const user = useSelector((state) => state.auth.user);

    if (user.accessToken !== undefined) {
        return <Navigate to='/' ></Navigate>
    }

    return children ? children : <Outlet />
}

export default AuthGards;