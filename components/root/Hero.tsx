'use client';

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-[#0D0D0D] dark:bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/bg.png" 
          alt="background" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-80" 
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="py-8 md:my-20 relative grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-white">
            Rise Above Fear
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-[#737373]">
            Explore our wide range of premium products, from kids and women's to men's essentials. Your feet deserves the best!
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-5 py-3 mr-3 border-white text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Shop Now
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        <div className="relative hidden lg:mt-0 lg:col-span-6 lg:flex">
          {/* Foreground Image with Rotation */}
          <Image 
            src="/hero-img.png" 
            alt="mockup" 
            width={1000} 
            height={700} 
            className="relative z-10 transform -rotate-[30deg]" // Adjust rotation angle here
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
