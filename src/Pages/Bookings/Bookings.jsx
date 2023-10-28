import { useContext } from "react";
import { Context } from "../../Components/AuthProvider/AuthProvider";
import { useEffect } from "react";
import BookingBanner from "./BookingBanner";

const Bookings = () => {
    const {user}= useContext(Context)
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className="container mx-auto">
            <BookingBanner></BookingBanner>
        </div>
    );
};

export default Bookings;