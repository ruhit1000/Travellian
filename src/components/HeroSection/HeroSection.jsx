import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className='pt-20 md:pt-30 lg:pt-35.5 pb-25'>
            <h1 className='font-playfair-display text-4xl sm:text-5xl md:text-6xl lg:text-[84px]/[90px] text-base-100 ml-4 sm:ml-5 md:ml-8 lg:ml-45.5'>Start your unforgettable <br /> journey with us.</h1>
            <p className='font-rubik text-lg sm:text-xl md:text-2xl text-base-100 ml-4 sm:ml-5 md:ml-8 lg:ml-45.5 mt-4'>The best travel for your journey begins now.</p>
            
            <form className='mt-20 md:mt-30 lg:mt-42.5 font-rubik bg-base-100 mx-auto md:mx-0 rounded-2xl md:rounded-s-none w-[95%] md:w-[80%] max-w-7xl pt-10 md:pt-0 md:flex justify-between' action="">
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 md:p-7 lg:py-12'>
                    <div>
                        <label className='text-[#767E86]' htmlFor="">DESTINATION</label><br />
                        <input className='border-b-2 w-full pb-2 font-playfair-display' type="text" />
                    </div>
                    <div>
                        <label className='text-[#767E86]' htmlFor="">PERSON</label><br />
                        <select className='border-b-2 w-full pb-2 font-playfair-display' name="" id="">
                            <option value="">1 Person</option>
                            <option value="">2 People</option>
                            <option value="">3 People</option>
                            <option value="">4 People</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-[#767E86]' htmlFor="">CHECK IN</label><br />
                        <input className='border-b-2 w-full pb-2 font-playfair-display' type="date" />
                    </div>
                    <div>
                        <label className='text-[#767E86]' htmlFor="">CHECK OUT</label><br />
                        <input className='border-b-2 w-full pb-2 font-playfair-display' type="date" />
                    </div>
                </div>
                <div>
                    <button className='font-playfair-display bg-[#FF7757] w-full text-4xl md:text-3xl text-base-100 py-10 md:py-6 px-5 mt-14 md:mt-0 md:h-full flex items-center justify-content gap-8 pl-10 rounded-b-2xl md:rounded-s-none md:rounded-e-2xl'>Book Now <span className='pt-3'><FaArrowRight /></span></button>
                </div>
            </form>
        </div>
    );
};

export default HeroSection;