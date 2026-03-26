import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const CarouselCard = ({ imageURL, name, location }) => {
    return (
        <div className='relative rounded-2xl text-base-100 h-95 flex items-end w-full lg:w-105 shrink-0 overflow-hidden shadow-lg'
            style={{
                backgroundImage: `url(${imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            {/* 1. Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* 2. 10% custom color tint */}
            <div className="absolute inset-0 bg-[#FF7757]/10"></div>

            {/* 3. Content */}
            <div className='relative z-10 py-10 px-5'>
                <h3 className='font-medium text-2xl font-playfair-display'>{name}</h3>
                <p className='flex gap-3 items-center font-rubik text-lg mt-4'>
                    <IoLocationSharp className="text-[#FF7757]" /> {location}
                </p>
            </div>
        </div>
    );
};

export default CarouselCard;