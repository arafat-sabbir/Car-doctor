import { useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import CheakoutBanner from "./CheakoutBanner";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Components/AuthProvider/AuthProvider";

const CheakOut = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const { user } = useContext(Context)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"

    })
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const customerName = form.name.value;
    const price = form.price.value;
    const date = form.date.value;
    const order = {
      email, customerName, price, date, img: product?.img, service: product?.title
    }
    fetch('http://localhost:5000/bookings', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <>
      <div className="container mx-auto">
        <CheakoutBanner></CheakoutBanner>
        <form onSubmit={handleSubmit} className="flex container mx-auto bg-[#F3F3F3] py-28 flex-col my-12 justify-center border-2 px-24">
          <div className="flex gap-4 justify-center">
            <input className="input  input-bordered bg-white w-3/12 mb-4" type="text" name="name" placeholder="Your name" id="" required />
            <input className=" input  input-bordered bg-white w-3/12 mb-4" type="date" name="date" id="" required />

          </div>
          <div className="flex gap-4 justify-center">
            <input className=" input  input-bordered bg-white w-3/12 mb-4" type="text" name="price" id="" placeholder="service Price" defaultValue={product?.price} />
            <input className=" input  input-bordered bg-white w-3/12 mb-4" type="text" name="email" id="" placeholder="Your email" defaultValue={user?.email ? user.email : ''} />
          </div>
          <textarea className="border-2 rounded-lg p-2" name="description" id="" cols="10" rows="10" placeholder="service Description"></textarea>
          <button className="btn bg-red-500 hover:bg-red-500 text-white mt-6">Submit</button>
        </form>
      </div>
      <div className="bg-black">
        <Footer></Footer>
      </div>
    </>

  );
};

export default CheakOut;