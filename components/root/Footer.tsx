import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full mt-20 pt-10 bg-[#0D0D0D] text-white">
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ul>
            <p className="mb-1 text-base font-semibold text-[#F20707]">Product</p>
            {["Overview", "Features", "Solutions", "Tutorials"].map((item) => (
              <li key={item}>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <p className="mb-1 text-base font-semibold text-[#F20707]">Company</p>
            {["About us", "Careers", "Press", "News"].map((item) => (
              <li key={item}>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <p className="mb-1 text-base font-semibold text-[#F20707]">Resource</p>
            {["Blog", "Newsletter", "Events", "Help center"].map((item) => (
              <li key={item}>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <p className="mb-1 text-base font-semibold text-[#F20707]">Help Center</p>
            {["Discord", "Twitter", "Github", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="#" className="block text-white py-1 hover:text-slate-50 focus:text-slate-50 text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-between w-full py-6 mt-12 border-t border-slate-200 md:flex-row">
          <p className="mb-4 text-sm text-center text-slate-50 md:mb-0">
            Copyright © {currentYear} <a href="https://material-tailwind.com/" className="hover:underline">Material Tailwind</a>. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube, FaLinkedin].map((Icon, index) => (
              <a key={index} href="#" className="transition-opacity text-inherit hover:opacity-80">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
