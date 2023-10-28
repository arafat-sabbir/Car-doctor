import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
    return (
        <div className=" mt-20 mb-32 w-full">
            <div className="flex gap-16 ">
                <div className="lg:w-1/2">
                    <div className="relative  ">
                        <img src={person} className="h-[473px] w-[490px] rounded-xl" />
                        <img className="absolute  w-[357px] h-[332px] shadow-2xl -bottom-20 border-8 rounded-xl border-white left-72" src={parts} alt="" />
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-10">
                  <p className="text-xl font-semibold text-[#ff3811]">About Us</p>
                  <h3 className="text-4xl leading-[45px] w-[376px] font-semibold ">We are qualified & of experience in this field</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                  <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                  <button className="btn bg-[#ff3811] hover:bg-[#ff3811] text-white border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;