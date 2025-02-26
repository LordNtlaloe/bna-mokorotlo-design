import React from "react";
import { FaMapPin, FaPhone, FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      <div className="w-full px-8 mx-auto max-w-7xl">
      <Image src="/images/logo.png" height={160} width={80} alt="Pawreedy Logo" className="py-5"/>
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-1">
          <div className="grid justify-between grid-cols-4 gap-4">
            <ul>
              <p className="block mb-1 text-base font-semibold text-[#1D1D1D]">Product</p>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Overview</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Features</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Solutions</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Tutorials</a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-[#1D1D1D]">Company</p>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">About us</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Careers</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Press</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">News</a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-[#1D1D1D]">Resource</p>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Newsletter</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Events</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Help center</a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-[#1D1D1D]">Help Center</p>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Discord</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Twitter</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Github</a>
              </li>
              <li>
                <a href="#" className="block text-[#1E1E1E] py-1 hover:text-[#1D1D1D] focus:text-[#1D1D1D] text-sm">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block mb-4 text-sm text-center text-[#1D1D1D] md:mb-0">
            Copyright © {currentYear} <a href="pawreedy.com">BNA Mokorotlo Design</a>. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-[#1E1E1E] sm:justify-center">
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <FaPinterest className="w-5 h-5" />
            </a>
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
