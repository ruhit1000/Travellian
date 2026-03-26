import React, { use, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import ChangeButtons from '../ChangeButtons/ChangeButtons';

const Blog = ({ blogPostsPromise }) => {
    const blogPostsRes = use(blogPostsPromise);
    const blogPosts = blogPostsRes.data;
    const [index, setIndex] = useState(0);
    const handleNext = () => setIndex((prev) => (prev + 1) % blogPosts.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % blogPosts.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [blogPosts.length]);


    return (
        <div className='py-20 px-4'>
            <div>
                <h2 className='font-playfair-display text-4xl pb-3 mr-10'>Our Blog</h2>
                <hr className='border-b-2 border-[#FF7757] max-w-62.5' />
                <div className='flex justify-between'>
                    <p className='font-rubik text-lg text-[#767E86] mt-8 mb-15'>An insight the incredible experience in the world</p>
                    <div className='hidden lg:flex items-end justify-end py-10'>
                        <ChangeButtons onLeft={handlePrev} onRight={handleNext} />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-8 overflow-x-auto scrollbar-hide'>
                    <BlogCard post={blogPosts[index]} />
                </div>
                <div className='p-10 flex justify-center lg:hidden'>
                    <ChangeButtons onLeft={handlePrev} onRight={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default Blog;