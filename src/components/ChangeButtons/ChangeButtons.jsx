import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const ChangeButtons = () => {
    return (
        <div className='flex gap-10'>
            {/* Left Button */}
            <button className='w-15 h-16 bg-[#172432] text-base-100 rounded-xl flex justify-center items-center 
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:brightness-125 active:scale-95'>
                <MdKeyboardArrowLeft size="2rem" />
            </button>

            {/* Right Button */}
            <button className='w-15 h-16 bg-[#FF7757] text-base-100 rounded-xl flex justify-center items-center 
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,119,87,0.3)] hover:brightness-110 active:scale-95'>
                <MdKeyboardArrowRight size="2rem" />
            </button>
        </div>
    );
};

export default ChangeButtons;