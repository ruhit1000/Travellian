import React from 'react';
import logo from '../../assets/Logo.png'
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer lg:footer-horizontal bg-[#172432] text-base-100 py-15 lg:pt-75 px-10 text-lg font-rubik">
            <aside>
                <img src={logo} alt="Logo" />
                <p className='text-sm'>Copyright © Travellian 2026 All rights reserved</p>
            </aside>
            <nav>
                <h6 className="footer-title font-medium text-2xl">Menu</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Explore</a>
                <a className="link link-hover">Travel</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Pricing</a>
            </nav>
            <nav>
                <h6 className="footer-title font-medium text-2xl">Information</h6>
                <a className="link link-hover">Destinations</a>
                <a className="link link-hover">Supports</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy Policy</a>
            </nav>
            <nav>
                <h6 className="footer-title font-medium text-2xl">Contact Info</h6>
                <a className="link link-hover">+123 456 789</a>
                <a className="link link-hover">info@travellian.com</a>
                <a className="link link-hover">1245, New Yourk, USA</a>
            </nav>
            <aside>
                <h6 className="footer-title font-medium text-2xl">Follow us on</h6>
                <div className='flex gap-4'>
                    <a href=""><FaFacebook size='2rem' /></a>
                    <a href=""><FaPinterest size='2rem' /></a>
                    <a href=""><FiInstagram size='2rem' /></a>
                    <a href=""><FaXTwitter size='2rem' /></a>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;