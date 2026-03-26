import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className='bg-[#F5F6F7] text-[#767E86] rounded-2xl py-8 px-5 w-full min-w-75 max-w-125 shrink-0 relative'>
            <img className='w-25 h-25 object-cover rounded-full absolute -top-13 left-8' src={review.imageUrl} alt="" />
            <p className='font-rubik text-lg mt-8'>{review.review}</p>
            <p className='text-yellow-400 mt-2'>⭐⭐⭐⭐⭐</p>
            <h4 className='font-playfair-display text-2xl mt-4'>{review.name}</h4>
            <p className='font-rubik text-lg'>{review.profession}</p>
        </div>
    );
};

export default ReviewCard;