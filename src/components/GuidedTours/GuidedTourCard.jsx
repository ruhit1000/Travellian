import React, { useState } from 'react';

const GuidedTourCard = ({ tour }) => {
    const [isTapped, setIsTapped] = useState(false);

    return (
        <div
            className='text-[#172432] min-w-62.5 group relative rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 lg:h-96 lg:overflow-hidden flex flex-col cursor-pointer'
            onClick={() => setIsTapped(!isTapped)}
            onMouseLeave={() => setIsTapped(false)}
        >

            <div className={`w-full lg:absolute lg:top-0 lg:left-0 lg:h-full lg:z-10 transition-transform duration-500 ${isTapped ? 'lg:-translate-y-40' : 'lg:group-hover:-translate-y-40'}`}>
                <img
                    className='w-full h-70 lg:h-full object-cover rounded-3xl'
                    src={tour.imageUrl}
                    alt={tour.name}
                />
            </div>

            <div className='p-4 lg:absolute lg:bottom-0 lg:left-0 w-full lg:h-40 lg:z-0 flex flex-col justify-center'>
                <div className='flex justify-between mt-0 font-rubik text-lg'>
                    <p className='text-sm font-bold opacity-80 mt-1'>GUIDED TOUR</p>
                    <p className='font-bold text-[#FF7757]'>{tour.price}</p>
                </div>

                <h2 className='font-playfair-display font-semibold text-2xl my-2 leading-tight'>
                    {tour.name}
                </h2>

                <div className='flex justify-between font-rubik text-base items-center'>
                    <p className='text-yellow-400'>⭐⭐⭐⭐⭐</p>
                    <p className='opacity-90'>{tour.duration} tour</p>
                </div>
            </div>
        </div>
    );
};

export default GuidedTourCard;