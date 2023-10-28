import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import CheakOut from "../Pages/CheakOut/CheakOut";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/services/:id",
                element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path:'/checkOut/:id',
                element:<CheakOut></CheakOut>,
              
            },
            {
                path:'/bookings',
                element:<Bookings></Bookings>
            }
        ]
    }
])

export default router;