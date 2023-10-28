import { useLoaderData } from "react-router-dom";
import ServiceBanner from "./ServiceBanner";
import { useState } from "react";
import { useEffect } from "react";
import ServiceRoute from "./ServiceRoute";
import image1 from "../../assets/icons/Group 71.png"
import image2 from "../../assets/icons/Group 38729.png"
import image3 from "../../assets/icons/Group.png"
import play from "../../assets/images/Frame.png"
import { Link } from "react-router-dom";

const ServiceDetail = () => {
    const serviceDetail = useLoaderData();
    const { img, facility, title } = serviceDetail;
    const [services, setServices] = useState([])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <div className="mt-12 container mx-auto">
                <ServiceBanner></ServiceBanner>
                <div className="flex mt-20 gap-10">
                    <div className="w-[75%] ">
                        <img src={img} alt="" className="rounded-xl w-full h-[600px] " />
                    </div>
                    <div className="w-[25%] bg-gray-200 py-10 rounded-lg">
                        <h1 className="text-2xl font-semibold pl-12">Services</h1>
                        {
                            services.map(item => <ServiceRoute item={item} key={item._id} currentTitle={serviceDetail.title}></ServiceRoute>)
                        }
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[75%]">
                        <h1 className="text-3xl font-bold mb-8 ">Unique Car Engine Service</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. </p>

                        <div className="grid grid-cols-2 gap-10 my-8 ">
                            {serviceDetail.facility.map(item => (<div key={item.name} className="w-[364px] h-[200px] border-t-2 border-red-500 bg-[#F3F3F3] py-10 px-5 rounded-xl text-center"> <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                                <p className="leading-8">{item.details}</p>
                            </div>))}
                        </div>
                        <h1 className="text-2xl font-bold">3 Simple Steps to Process</h1>
                        <p className="my-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="card   p-10 text-center border hover:shadow-[0_0_40px_#E3DEE0]  hover:shadow-red-500 duration-300">
                                <figure className="px-10 pt-10 ">
                                    <img src={image1} alt="Shoes" className="" />
                                </figure>
                                <h2 className="text-xl py-4 font-bold text-black">Step One</h2>
                                <p className="leading-6">It uses a dictionary <br /> of over 200 .</p>
                            </div>
                            <div className="card text-center bg-red-500 text-white border hover:shadow-[0_0_20px_#E3DEE0] hover:shadow-violet-900 duration-300">
                                <figure className="px-10 pt-10 ">
                                    <img src={image2} alt="Shoes" className="" />
                                </figure>
                                <h2 className="text-xl py-4 font-bold">Step Two</h2>
                                <p className="leading-6">It uses a dictionary <br /> of over 200 .</p>
                            </div>
                            <div className="card text-center border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300">
                                <figure className="px-10 pt-10 ">
                                    <img src={image3} alt="Shoes" className="" />
                                </figure>
                                <h2 className="text-xl py-4 font-bold text-black">Step Three</h2>
                                <p className="leading-6">It uses a dictionary <br /> of over 200 .</p>
                            </div>
                        </div>

                       <div className="relative">
                       <img src={img} alt="" className="rounded-xl w-full h-[600px] my-10" />
                        <img src={play} alt="" className="absolute top-[40%] left-[43%]"/>
                       </div>

                    </div>
                    <div>
                    </div>
                    <div className="w-[25%]">
                       <h1 className="text-4xl font-bold ml-2 my-8">Price $250.00</h1>
                       <Link to={`/checkOut/${serviceDetail._id}`}><button className="btn bg-red-500 hover:bg-red-500 w-full text-white">Proceed Checkout</button></Link>
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default ServiceDetail;

