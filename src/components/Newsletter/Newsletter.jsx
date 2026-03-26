import React from 'react';

const Newsletter = () => {
    return (
        <div className='px-4 lg:relative'>
            <div className='border-2 border-base-300 rounded-3xl p-10 text-[#767E86] font-rubik lg:w-[85%] mx-auto lg:relative lg:top-25 lg:bg-white grid lg:grid-cols-2 gap-10'>
                <h2 className='font-playfair-display text-4xl mb-15 lg:mb-0 lg:flex items-center'>Our Newsletter</h2>
                <form className='grid lg:grid-cols-3 gap-5' action="">
                    <div className='lg:col-span-2'>
                        <label className='text-xl' htmlFor="">Email</label><br />
                        <input className='bg-[#FFE8D4] mt-4 py-6 pl-8 text-[#FF7757] text-xl rounded-xl w-full' placeholder='Enter your email' type="email" name="" id="" />
                    </div>
                    <div className='pt-5'>
                        <button className='bg-[#FF7757] text-white text-xl font-medium py-6 px-10 w-full rounded-xl mt-6 cursor-pointer'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;