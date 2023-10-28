import { useContext } from "react";
import { Context } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user,loader } = useContext(Context)
    if(loader){
        return<div className="flex justify-center items-center h-screen"><span className="loading loading-spinner text-warning loading-lg"></span></div> 
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    }

}
export default PrivateRoute;