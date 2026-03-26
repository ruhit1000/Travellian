import React from 'react';

const OfferCard = ({ imageURL, name, details, price }) => {
    return (
        <div className='bg-[#FFF8F1] w-full rounded-3xl md:max-w-95 lg:max-w-105 shrink-0 overflow-hidden'>
            <div className="group overflow-hidden rounded-2xl h-80 rounded-t-3xl">
                <img
                    src={imageURL}
                    className="rounded-t-3xl transition-transform duration-500 group-hover:scale-110 object-cover w-full h-full"
                />
            </div>
            <div className='p-5'>
                <h4 className='font-mulish text-3xl text-[#767E86]'>{name}</h4>
                <p className='my-2'>⭐⭐⭐⭐⭐</p>
                <p className='text-[#172432] font-rubik my-3 line-clamp-4'>{details}</p>
                <p className='font-rubik text-lg text-[#767E86] my-2'>From <span className='text-3xl text-[#FF7757]'>{price}</span></p>
                <button className='btn btn-primary my-2'>DETAILS</button>
            </div>
        </div>
    );
};

export default OfferCard;