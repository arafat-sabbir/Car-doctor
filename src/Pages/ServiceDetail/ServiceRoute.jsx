import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from 'react-icons/io5';


const ServiceRoute = ({ item,currentTitle}) => {
    console.log(item);
    return (
        <div className="flex flex-col items-center">
            <div>
            <Link to={`/services/${item._id}`} className={`${item.title===currentTitle ? 'bg-red-500 text-white':'bg-white text-black'} pl-10 w-[284px] h-[60px] flex items-center  font-semibold my-3 rounded-lg`}>{item.title} <span><IoChevronForwardOutline/></span></Link>
            </div>
        </div>
    );
};

export default ServiceRoute;