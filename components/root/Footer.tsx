import React from "react";
import { FaMapPin, FaPhone, FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GiCog } from "react-icons/gi"; // Example for custom cog icon


const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="relative w-full mt-20 pt-10 bg-violet-950 text-white">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-1">
          <div className="grid justify-between grid-cols-4 gap-4">
            <ul>
              <p className="block mb-1 text-base font-semibold text-violet-400">Product</p>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Overview</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Features</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Solutions</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Tutorials</a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-violet-400">Company</p>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">About us</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Careers</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Press</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">News</a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-violet-400">Resource</p>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Newsletter</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Events</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Help center</a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-violet-400">Help Center</p>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Discord</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Twitter</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Github</a>
              </li>
              <li>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block mb-4 text-sm text-center text-slate-50 md:mb-0">
            Copyright © {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-white sm:justify-center">
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
