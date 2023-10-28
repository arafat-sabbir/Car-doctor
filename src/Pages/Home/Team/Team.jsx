import member1 from "../../../assets/images/team/1.jpg"
import member2 from "../../../assets/images/team/2.jpg"
import member3 from "../../../assets/images/team/3.jpg"
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin } from 'react-icons/bs';
import { RiLinkedinFill} from 'react-icons/ri';

const Team = () => {
    return (
        <div className="my-32">
            <div className="text-center space-y-5">
                <p className="text-xl font-bold text-red-500">Team</p>
                <h3 className="text-4xl font-bold ">Meet Our Team</h3>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center center items-center lg:grid-cols-3 mt-14">
           <div className="card w-96 hover:shadow-[0_0_40px_#00000028] hover:border-red-500 hover:shadow-red-500 duration-300 border-2">
                <figure className="px-10 pt-10">
                    <img src={member1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Car Engine Plug</h2>
                    <p>Engine Expert</p>
                    <div className="flex gap-3">
                        <p className="text-[#395185]"><BsFacebook></BsFacebook></p>
                        <p className="text-[#55acee]"><BsTwitter></BsTwitter></p>
                        <p className="text-[#c34590]"><BsInstagram></BsInstagram></p>
                        <p className="text-blue-500"><RiLinkedinFill></RiLinkedinFill></p>
                    </div>
                    
                </div>
            </div>
            <div className="card w-96  hover:shadow-[0_0_40px_#00000028] hover:border-red-500 hover:shadow-red-500 duration-300 border-2">
                <figure className="px-10 pt-10">
                    <img src={member2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Car Engine Plug</h2>
                    <p>Engine Expert</p>
                    <div className="flex gap-3">
                        <p className="text-[#395185]"><BsFacebook></BsFacebook></p>
                        <p className="text-[#55acee]"><BsTwitter></BsTwitter></p>
                        <p className="text-[#c34590]"><BsInstagram></BsInstagram></p>
                        <p className="text-blue-500"><RiLinkedinFill></RiLinkedinFill></p>
                    </div>
                    
                </div>
            </div>
            <div className="card md:w-96 hover:shadow-[0_0_40px_#00000028] hover:border-red-500 hover:shadow-red-500 duration-300 border-2">
                <figure className="px-10 pt-10">
                    <img src={member3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Car Engine Plug</h2>
                    <p>Engine Expert</p>
                    <div className="flex gap-3">
                        <p className="text-[#395185]"><BsFacebook></BsFacebook></p>
                        <p className="text-[#55acee]"><BsTwitter></BsTwitter></p>
                        <p className="text-[#c34590]"><BsInstagram></BsInstagram></p>
                        <p className="text-blue-500"><RiLinkedinFill></RiLinkedinFill></p>
                    </div>
                    
                </div>
            </div>
           </div>
        </div>
    );
};

export default Team;