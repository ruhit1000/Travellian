import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const CarouselCard = () => {
    return (
        <div className='rounded-2xl py-10 px-5 text-base-100 h-95 flex items-end' 
        style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 119, 87, 0.1), rgba(255, 119, 87, 0.1)), url(https://i.ibb.co.com/5WwzcCxb/germany.png)', 
            backdropFilter: 'blur(4px)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
            }}>
            <div>
                <h3 className='font-medium text-2xl font-playfair-display'>Monument of Berlin</h3>
                <p className='flex gap-3 items-center font-rubik text-lg mt-4'><span><IoLocationSharp /></span>Berlin, Germany</p>
            </div>
        </div>
    );
};

export default CarouselCard;