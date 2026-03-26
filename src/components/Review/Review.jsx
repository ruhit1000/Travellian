import React, { use, useEffect, useRef } from 'react';
import ReviewCard from './ReviewCard';
import ChangeButtons from '../ChangeButtons/ChangeButtons';

const Review = ({ reviewsPromise }) => {
    const reviewsRes = use(reviewsPromise);
    const reviews = reviewsRes.data;

    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 430;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (!scrollContainer) return;

        const interval = setInterval(() => {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: 430, behavior: 'smooth' });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [reviews]);

    return (
        <div className='py-20 lg:pt-20 lg:pb-5 px-4'>
            <h2 className='font-playfair-display text-4xl pb-3 mr-10'>What Our Clients Say</h2>
            <hr className='border-b-2 border-[#FF7757] max-w-62.5' />
            <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>Here some awesome feedback from our travelers</p>
            <div ref={scrollRef} className='flex gap-8 pt-15 overflow-x-auto scrollbar-hide'>
                {
                    reviews.map((review) => <ReviewCard key={review.id} review={review} />)
                }
            </div>
            <div className='p-10 flex justify-center'>
                <ChangeButtons
                    onLeft={() => handleScroll('left')}
                    onRight={() => handleScroll('right')}
                />
            </div>
        </div>
    );
};

export default Review;