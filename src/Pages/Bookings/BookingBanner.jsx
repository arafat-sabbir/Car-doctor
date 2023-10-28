import Bookings from "../../assets/images/checkout/Rectangle 1548.png";
import vector from "../../assets/images/checkout/Vector.png";


const BookingBanner = () => {
    return (
        <div>
           <div className="relative rounded-xl">
            <img src={Bookings} alt="" className="container mx-auto "/>
            <div style={{ backgroundImage: `url(${vector})`, backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center" }} className="flex  absolute left-[41%] bottom-0 justify-center h-11 w-[296px]">
                <h3 className="z-50 py-5  font-medium text-white flex justify-center items-center text-center">Your Bookings</h3>
            </div>
            <div className="absolute top-0 flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <h3 className="text-5xl font-bold text-white ml-20">Cart Details</h3>
                <p className="text-red-500 font-semibold">Home-Product/Detail</p>
            </div>
            </div> 
        </div>
    );
};

export default BookingBanner;