import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const CarouselCard = ({ imageURL, name, location }) => {
    return (
        <div className='relative group rounded-2xl text-base-100 h-95 flex items-end w-full lg:w-105 shrink-0 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl'>

            <div
                className='absolute inset-0 transition-transform duration-700 group-hover:scale-110'
                style={{
                    backgroundImage: `url(${imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 bg-[#FF7757]/10"></div>

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