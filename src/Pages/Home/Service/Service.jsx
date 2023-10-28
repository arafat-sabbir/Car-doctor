import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, price, description, img, _id } = service;
    return (
        <div className="card  border hover:border-red-500  w-[450px] hover:shadow-[0_0_40px_#00000028] hover:shadow-red-500 duration-300" >
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl h-[300px]" />
            </figure>
            <div className="px-6 mb-5 ">
                <h1 className="text-2xl text-[#444444]  font-semibold py-5">{title}</h1>
                <div className='flex justify-between text-red-500'>
                    <p className="text-red-500 text-xl font-semibold">Price : {price}</p>
                    <Link to={`services/${_id}`}><button className='text-2xl'><IoArrowForward /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;