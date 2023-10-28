import { useEffect, useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
   

    return (
        <div className="my-20" id="services">
           <div className="text-center my-8 space-y-5">
           <div>
            <p className="text-red-500 font-bold">Service</p>
            <h3 className="text-4xl font-bold">Our Service Area</h3>
            </div>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
           </div>
          <div className="grid grid-cols-1 md: md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            services?.map(service => <Service key={service._id} service={service}></Service> )
           }
          </div>
          <div className="flex justify-center mt-8">
          <Link className=" border  btn border-[#FF3811] hover:border-[#FF3811] bg-transparent hover:bg-transparent text-[#FF3811]  py-3 px-5 rounded-md">More Services</Link></div>
        </div>
    );
};

export default Services;