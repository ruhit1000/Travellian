import React, { use, useEffect, useRef } from 'react';
import GuidedTourCard from './GuidedTourCard';

const GuidedTours = ({ guidedToursPromise }) => {
    const guidedToursRes = use(guidedToursPromise);
    const guidedTours = guidedToursRes.data;

    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (!scrollContainer) return;

        const interval = setInterval(() => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [guidedTours]);

    return (
        <div ref={scrollRef} className='py-20 px-4 flex flex-col gap-10 lg:flex-row overflow-x-auto'>
            <div className='mb-20 lg:min-w-100'>
                <h2 className='font-playfair-display text-4xl pb-3 mr-10'>Trip Planners</h2>
                <hr className='border-b-2 border-[#FF7757] max-w-62.5' />
                <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.</p>
                <div className='flex max-w-54.5 relative'>
                    <div className='w-11 h-11 bg-[#172432] absolute -top-3'></div>
                    <button className='bg-[#FF7757] text-white font-rubik py-3 px-6 rounded-md hover:bg-[#e0634d] transition-colors duration-300 z-1 absolute left-3'>
                        View all trip plans
                    </button>
                    <div className='w-11 h-11 bg-[#767E86] absolute right-4 -bottom-15'></div>
                </div>
            </div>
            {
                guidedTours.map((tour) => (
                    tour.highlight && <GuidedTourCard key={tour.id} tour={tour} />
                ))
            }
        </div>
    );
};

export default GuidedTours;