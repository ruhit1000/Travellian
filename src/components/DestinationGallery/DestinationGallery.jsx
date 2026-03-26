import React, { use, useRef } from 'react';
import ChangeButtons from '../ChangeButtons/ChangeButtons';
import ImageComponent from './ImageComponent';

const DestinationGallery = ({ destinationGalleryPromise }) => {
    const destinationGalleryRes = use(destinationGalleryPromise);
    const destinationGallery = destinationGalleryRes.data;

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
                <h2 className='font-playfair-display text-4xl pb-3 mr-10'>Destination Gallery</h2>
                <hr className='border-b-2 border-[#FF7757] max-w-62.5' />
                <div className='flex justify-between'>
                    <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>Our photo gallery on trip</p>
                    <div className='hidden lg:flex items-end justify-end py-10'>
                        <ChangeButtons
                            onLeft={() => handleScroll('left')}
                            onRight={() => handleScroll('right')}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-8 pt-10 px-4 overflow-x-auto scrollbar-hide' ref={scrollRef}>
                    {destinationGallery?.map((destination) => (
                        <ImageComponent key={destination.id} imageUrl={destination.imageUrl} />
                    ))}
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

export default DestinationGallery;