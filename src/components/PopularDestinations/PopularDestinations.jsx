import React, { use, useRef } from 'react';
import CarouselCard from './CarouselCard';
import ChangeButtons from '../ChangeButtons/ChangeButtons';

const PopularDestinations = ({ destinationsPromise }) => {

    const destinationsRes = use(destinationsPromise);
    const destinations = destinationsRes.data;

    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 360;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div className='py-20 px-4'>
            <div>
                <h2 className='font-playfair-display text-4xl border-b-4 border-[#FF7757] pb-3 mr-10'>Popular Destinations</h2>
                <div className='flex justify-between'>
                    <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>Most popular destinations around the world, from historical places to natural wonders.</p>
                    <div className='hidden lg:flex items-end justify-end py-10'>
                        <ChangeButtons
                            onLeft={() => handleScroll('left')}
                            onRight={() => handleScroll('right')}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div ref={scrollRef} className='flex gap-8 px-4 overflow-x-auto scrollbar-hide'>
                    {
                        destinations.map((destination) => <CarouselCard key={destination.id} imageURL={destination.imageURL} name={destination.name} location={destination.location} />)
                    }
                </div>
                <div className='p-10 flex justify-center lg:hidden'>
                    <ChangeButtons
                        onLeft={() => handleScroll('left')}
                        onRight={() => handleScroll('right')}
                    />
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;