import React, { useRef } from 'react';

const ReviewCard = ({ review }) => {
    const modalRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (e.target === modalRef.current) {
            modalRef.current.close();
        }
    };

    return (
        <>
            <div
                onClick={() => modalRef.current.showModal()}
                className='cursor-pointer bg-[#F5F6F7] text-[#767E86] rounded-2xl py-8 px-5 w-full min-w-75 max-w-125 shrink-0 relative'
            >
                <img className='w-25 h-25 object-cover rounded-full absolute -top-13 left-8' src={review.imageUrl} alt="" loading="lazy" decoding="async"/>
                <p className='font-rubik text-lg mt-8'>{review.review}</p>
                <p className='text-yellow-400 mt-2'>⭐⭐⭐⭐⭐</p>
                <h4 className='font-playfair-display text-2xl mt-4'>{review.name}</h4>
                <p className='font-rubik text-lg'>{review.profession}</p>
            </div>

            <dialog
                ref={modalRef}
                className="modal"
                onClick={handleOutsideClick}
            >
                <div className="modal-box pt-20 shadow-none">
                    <div className='bg-[#F5F6F7] text-[#767E86] rounded-2xl py-8 px-5 w-full min-w-75 max-w-125 shrink-0 relative'>
                        <img className='w-25 h-25 object-cover rounded-full absolute -top-13 left-8' src={review.imageUrl} alt="" loading="lazy" decoding="async"/>
                        <p className='font-rubik text-lg mt-8'>{review.review}</p>
                        <p className='text-yellow-400 mt-2'>⭐⭐⭐⭐⭐</p>
                        <h4 className='font-playfair-display text-2xl mt-4'>{review.name}</h4>
                        <p className='font-rubik text-lg'>{review.profession}</p>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ReviewCard;