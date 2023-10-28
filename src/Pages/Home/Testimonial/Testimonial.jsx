const Testimonial = () => {
    return (
        <div className='my-32'>
            <div className="text-center space-y-5">
                <p className="text-xl font-bold text-red-500">Testimonial</p>
                <h3 className="text-4xl font-bold ">What Customer Says</h3>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="mt-12">
                <div className="flex justify-center p-4">
                        <div className="overflow-hidden  border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300 m-4 flex justify-center w-[558px] h-[349px]   md:w-[33%]  shadow-xl bg-red-400">
                            <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center ">
                                        <div className="flex items-center">
                                            <div className="p-1 bg-white rounded-full">
                                                <img src="https://source.unsplash.com/100x100/?man,boy" alt=""
                                                    className="rounded-full" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-stone-500 mx-4">John Doe</div>
                                                <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><a
                                                    href="#">Board Director of Tailblocks</a></div>
                                            </div>
                                        </div>
                                        <div className="text-stone-400  m-2 px-8"> Tailblocks provides best Tailwind CSS Components and
                                            Blocks to create an unique websites within minutes. It has upto 60+ free components for
                                            front-end Web Development.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden w-full border hover:shadow-[0_0_40px_#E3DEE0] hover:shadow-red-500 duration-300 m-4 flex justify-center w-[558px] h-[349px]  md:w-[33%]  shadow-xl bg-red-400">
                            <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center ">
                                        <div className="flex items-center">
                                            <div className="p-1 bg-white rounded-full">
                                                <img src="https://source.unsplash.com/100x100/?man,boy" alt=""
                                                    className="rounded-full" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-stone-500 mx-4">John Doe</div>
                                                <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4"><a
                                                    href="#">Board Director of Tailblocks</a></div>
                                            </div>
                                        </div>
                                        <div className="text-stone-400  m-2 px-8"> Tailblocks provides best Tailwind CSS Components and
                                            Blocks to create an unique websites within minutes. It has upto 60+ free components for
                                            front-end Web Development.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Testimonial;