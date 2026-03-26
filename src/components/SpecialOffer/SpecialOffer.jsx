import React, { use, useRef } from 'react';
import ChangeButtons from '../ChangeButtons/ChangeButtons';
import OfferCard from './OfferCard';

const SpecialOffer = ({ specialOfferPromise }) => {
    const specialOffersRes = use(specialOfferPromise);
    const specialOffers = specialOffersRes.data;

    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div className='py-20 px-4'>
            <div>
                <h2 className='font-playfair-display text-4xl pb-3 lg:text-right'>Special Offer</h2>
                <hr className='lg:ml-auto border-b-2 border-[#FF7757] max-w-62.5' />
                <div className='flex justify-between'>
                    <div className='hidden lg:flex items-end justify-end py-10 ml-8'>
                        <ChangeButtons
                        onLeft={() => handleScroll('left')}
                        onRight={() => handleScroll('right')}
                        />
                    </div>
                    <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>Check out our special offer and discounts</p>
                </div>
                <div>
                    <div ref={scrollRef} className='flex gap-8 px-4 overflow-x-auto scrollbar-hide'>
                        {
                            specialOffers.map((item) => <OfferCard key={item.id} imageURL={item.imageURL} name={item.destination_name} details={item.details} price={item.price} />)
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
        </div>
    );
};

export default SpecialOffer;