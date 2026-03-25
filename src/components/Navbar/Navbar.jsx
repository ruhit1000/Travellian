import React from 'react';
import logo from '../../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar bg-transparent text-base-100 container mx-auto py-4">
            <div className="navbar-start">
                <a><img src={logo} alt="Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><a className='font-medium border-b-2 border-[#FF7757]'>Home</a></li>
                    <li><a className='hover:border-b-2 border-[#FF7757]'>Explore</a></li>
                    <li><a className='hover:border-b-2 border-[#FF7757]'>Travel</a></li>
                    <li><a className='hover:border-b-2 border-[#FF7757]'>Blog</a></li>
                    <li><a className='hover:border-b-2 border-[#FF7757]'>Pricing</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex items-center">
                    <a className="btn btn-ghost">Login</a>
                    <a className="btn btn-primary">Sign up</a>
                </div>
                <div className="dropdown dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 text-neutral text-lg rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className='font-medium border-b-2 border-[#FF7757]'>Home</a></li>
                        <li><a>Explore</a></li>
                        <li><a>Travel</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Pricing</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;