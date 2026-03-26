import React from 'react';

const ImageComponent = ({ imageUrl }) => {
    return (
        <div className='w-full lg:w-75 rounded-3xl h-80 md:h-100 lg:h-110 shrink-0 hover:-translate-y-10 transition-transform duration-300 hover:brightness-110 hover:shadow-lg'>
            <img className='w-full rounded-3xl h-full object-cover' src={imageUrl} alt="" loading="lazy"
            decoding="async"
            />
        </div>
    );
};

export default ImageComponent;