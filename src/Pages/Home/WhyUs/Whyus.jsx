import image1 from "../../../assets/icons/Group 71.png"
import image2 from "../../../assets/icons/Group 38729.png"
import image3 from "../../../assets/icons/Group.png"
import image4 from "../../../assets/icons/Wrench.png"
import image5 from "../../../assets/icons/Group 38730.png"
import image6 from "../../../assets/icons/Group 38731.png"
const Whyus = () => {
    return (
        <div className="my-32" id='whyus'>
            <div className="text-center space-y-5">
                <p className="text-xl font-bold text-red-500">Core Features</p>
                <h3 className="text-4xl font-bold ">Why Choose Us</h3>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='flex gap-6 justify-center mt-12'>
                <div className="card w-[170px] h-[156px] border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                    <figure className="px-10 pt-10 ">
                        <img src={image1} alt="Shoes" className="" />
                    </figure>
                        <h2 className="text-center py-4 font-bold text-gray-600">Expert Team</h2>
                </div>
                <div className="card w-[170px] h-[156px] bg-red-500 border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                    <figure className="px-10 pt-10 ">
                        <img src={image2} alt="Shoes" className="" />
                    </figure>
                        <h2 className="text-center py-4 font-bold text-white">Timely Delivery</h2>
                </div>
                <div className="card w-[170px] h-[156px] border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                    <figure className="px-10 pt-10 ">
                        <img src={image3} alt="Shoes" className="" />
                    </figure>
                        <h2 className="text-center py-4 font-bold text-gray-600">24/7 Support</h2>
                </div>
                <div className="card w-[170px] h-[156px] border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                    <figure className="px-10 pt-10 ">
                        <img src={image4} alt="Shoes" className="" />
                    </figure>
                        <h2 className="text-center py-4 font-bold text-gray-600">Best Equipment</h2>
                </div>
                <div className="card w-[170px] h-[156px] border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                    <figure className="px-10 pt-10 ">
                        <img src={image5} alt="Shoes" className="" />
                    </figure>
                        <h2 className="text-center py-4 font-bold text-gray-600">100% Guranty</h2>
                </div>
                <div className="card w-[170px] h-[156px] border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                    <figure className="px-10 pt-10 ">
                        <img src={image6} alt="Shoes" className="" />
                    </figure>
                        <h2 className="text-center py-4 font-bold text-gray-600">Timely Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default Whyus;