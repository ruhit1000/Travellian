import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const BlogCard = ({ post }) => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 items-center w-full shrink-0'>
            <div>
                <img className='w-full h-80 lg:h-135 xl:h-150 object-cover rounded-3xl' src={post.imageUrl} alt="" />
            </div>
            <div className='space-y-4'>
                <h2 className='font-playfair-display text-4xl text-[#172432]'>{post.title}</h2>
                <p className='font-rubik text-lg text-[#767E86] mt-2'>{post.description}</p>
                <button className='flex items-center gap-2 btn btn-ghost rounded-2xl text-[#FF7757]'>Read More <GoArrowRight /></button>
            </div>
        </div>
    );
};

export default BlogCard;