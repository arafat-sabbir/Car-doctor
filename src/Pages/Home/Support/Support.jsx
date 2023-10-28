import image1 from "../../../assets/images/icon1.png"
import image2 from "../../../assets/images/icon2.png"
import image3 from "../../../assets/images/icon3.png"

const Support = () => {
    return (
     <div className="bg-black text-white flex justify-evenly items-center h-[250px] rounded-xl my-32">
        <div className="flex gap-5 items-center">
            <img src={image1} alt="" />
            <div>
                <p className="font-medium">We are open monday-friday</p>
                <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
            </div>
        </div>
        <div className="flex gap-5 items-center">
            <img src={image2} alt="" />
            <div>
                <p className="font-medium">Have a question?</p>
                <h3 className="text-2xl font-bold">+2546 251 2658</h3>
            </div>
        </div>
        <div className="flex gap-5  items-center">
            <img src={image3} alt="" />
            <div>
                <p className="font-medium">Need a repair? our address</p>
                <h3 className="text-2xl font-bold">Liza Street, New York</h3>
            </div>
        </div>
     </div>
    );
};

export default Support;