import { IoChevronForwardOutline } from 'react-icons/io5';
import { IoChevronBackOutline } from 'react-icons/io5';
import img1 from "../../assets/images/homeCarousel/1.jpg"
import img2 from "../../assets/images/homeCarousel/2.jpg"
import img3 from "../../assets/images/homeCarousel/3.jpg"
import img4 from "../../assets/images/homeCarousel/4.jpg"
const Banner = () => {
  return (
    <div className="carousel my-4">
      <div id="slide1" className="carousel-item relative w-full h-[750px] ">
        <img src={img1} className="w-full h-[750px] mx-auto rounded-xl" />
        <div className="absolute flex items-center  h-full w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white transform rounded-xl ">
          <div className='ml-16 space-y-7'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#ff3811] hover:bg-[#ff3811] border-none text-white">Discover More</button>
              <button className="btn text-white hover:bg-transparent btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-4 transform -translate-y-1/2  right-10 top-[90%]">
          <a href="#slide4" className="btn border-none text-white bg-[#ff3811] hover:bg-[#ff3811] btn-circle"><IoChevronBackOutline></IoChevronBackOutline> </a>
          <a href="#slide2" className="btn btn-circle  border-none text-white bg-[#ff3811] hover:bg-[#ff3811]"><IoChevronForwardOutline/></a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[750px] ">
        <img src={img2} className="w-full h-[750px] mx-auto rounded-xl" />
        <div className="absolute flex items-center  h-full w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white transform rounded-xl ">
          <div className='ml-16 space-y-7'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#ff3811] hover:bg-[#ff3811] border-none text-white">Discover More</button>
              <button className="btn text-white hover:bg-transparent btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-4 transform -translate-y-1/2  right-10 top-[90%]">
          <a href="#slide1" className="btn border-none text-white bg-[#ff3811] hover:bg-[#ff3811] btn-circle"><IoChevronBackOutline></IoChevronBackOutline> </a>
          <a href="#slide3" className="btn btn-circle  border-none text-white bg-[#ff3811] hover:bg-[#ff3811]"><IoChevronForwardOutline></IoChevronForwardOutline></a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[750px] ">
        <img src={img3} className="w-full h-[750px] mx-auto rounded-xl" />
        <div className="absolute flex items-center  h-full w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white transform rounded-xl ">
          <div className='ml-16 space-y-7'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#ff3811] hover:bg-[#ff3811] border-none text-white">Discover More</button>
              <button className="btn text-white hover:bg-transparent btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-4 transform -translate-y-1/2  right-10 top-[90%]">
          <a href="#slide2" className="btn border-none text-white bg-[#ff3811] hover:bg-[#ff3811] btn-circle"><IoChevronBackOutline></IoChevronBackOutline> </a>
          <a href="#slide4" className="btn btn-circle  border-none text-white bg-[#ff3811] hover:bg-[#ff3811]"><IoChevronForwardOutline></IoChevronForwardOutline></a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[750px] ">
        <img src={img4} className="w-full h-[750px] mx-auto rounded-xl" />
        <div className="absolute flex items-center  h-full w-1/3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white transform rounded-xl ">
          <div className='ml-16 space-y-7'>
            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex gap-4'>
              <button className="btn bg-[#ff3811] hover:bg-[#ff3811] border-none text-white">Discover More</button>
              <button className="btn text-white hover:bg-transparent btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex  gap-4 transform -translate-y-1/2  right-10 top-[90%]">
          <a href="#slide3" className="btn border-none text-white bg-[#ff3811] hover:bg-[#ff3811] btn-circle"><IoChevronBackOutline></IoChevronBackOutline> </a>
          <a href="#slide1" className="btn btn-circle  border-none text-white bg-[#ff3811] hover:bg-[#ff3811]"><IoChevronForwardOutline></IoChevronForwardOutline></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;