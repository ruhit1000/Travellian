import React from 'react';
import CarouselCard from './CarouselCard';
import ChangeButtons from '../ChangeButtons/ChangeButtons';

const PopularDestinations = () => {
    return (
        <div className='pt-20 px-4'>
            <div>
                <h2 className='font-playfair-display text-4xl border-b-4 border-[#FF7757] pb-3 mr-10'>Popular Destinations</h2>
                <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>Most popular destinations around the world, from historical places to natural wonders.</p>
            </div>
            <CarouselCard />
            <div className='p-10 flex justify-center'>
                <ChangeButtons />
            </div>
        </div>
    );
};

export default PopularDestinations;