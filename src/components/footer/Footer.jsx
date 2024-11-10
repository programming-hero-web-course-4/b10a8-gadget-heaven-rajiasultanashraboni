import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <>
        <footer className="bg-white text-black p-10 shadow-lg w-full">
          <div className="flex justify-center flex-col font-bold text-[32px]">
            <h1 className="text-center">Sakib Gadget Heaven</h1>
            <p className='text-gray-400 text-[16px] font-[500]'>Leading the way in cutting-edge technology and innovation.</p>
          </div>
          <div className="w-full flex justify-between mt-8">
            <div>
              <nav className="flex flex-col gap-y-2 text-left">
                <h6 className="footer-title">Services</h6>
                <Link className="link link-hover">Order Tracking</Link>
                <Link className="link link-hover">Shipping & Delevary</Link>
                <Link className="link link-hover">Returns</Link>
              </nav>
            </div>
            <div>
              <nav className="flex flex-col gap-y-2 text-left">
                <h6 className="footer-title">Company</h6>
                <Link to='/contact' className="link link-hover">About Us</Link>
                <Link className="link link-hover">Careers</Link>
                <Link className="link link-hover">Contact</Link>
              </nav>
            </div>
            <div>
              <nav className="flex flex-col gap-y-2 text-left">
                <h6 className="footer-title">Legal</h6>
                <Link className="link link-hover">Terms of Service</Link>
                <Link className="link link-hover">Privacy Policy</Link>
                <Link className="link link-hover">Cookie Policy</Link>
              </nav>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;