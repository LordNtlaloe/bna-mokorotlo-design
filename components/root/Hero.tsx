import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import bigShoe1 from "@/public/images/hero-1.png";
import { GiPodiumWinner } from "react-icons/gi";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string | StaticImageData>(bigShoe1);

  return (
    <section
      id="home"
      className="w-screen min-h-screen flex flex-col xl:flex-row justify-center items-center overflow-hidden"
    >
      <div className="bg-white flex flex-col xl:flex-row justify-center items-center w-full">
        {/* Left Section */}
        <div className=" w-full xl:w-1/2 p-6 sm:p-12 relative flex flex-col justify-between">
          <div>
            <div className="absolute top-0 -left-10 w-20 h-full bg-[#F20707] hidden lg:block"></div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-2 tracking-tight text-gray-800 pl-6 sm:pl-8">
              BNA
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-700 pl-6 sm:pl-8">
              Mokorotlo Design
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed pl-6 sm:pl-8">
              Experience unmatched comfort and performance with BNA&apos;s
              latest running shoes.
            </p>
            <div className="my-8 sm:my-12 pl-6 sm:pl-8">
              <p className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 font-extrabold tracking-tight">
                R1,300.00
              </p>
              <button className="mt-6 bg-[#F20707] text-white px-8 sm:px-12 py-3 sm:py-4 rounded font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-transform ease-in-out duration-300 transform">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <div className="flex space-x-3 mt-6 pl-6 sm:pl-8">
              {[...Array(3)].map((_, idx) => (
                <Image
                  key={idx}
                  alt={`Shoe image ${idx + 1}`}
                  className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                  src="/images/hero-1.png"
                  width={500}
                  height={500}  
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Hidden on Medium Screens, Equal Width on Large Screens */}
        <div className="w-full xl:w-1/2 bg-[#0D0D0D] relative flex-col justify-center items-center overflow-hidden py-12 sm:py-16 rounded-lg xl:rounded-none hidden md:flex">
          <div className="absolute top-6 right-6 flex space-x-4">
            <div className="w-12 h-12 bg-[#F20707] flex items-center justify-center shadow-lg rounded-full cursor-pointer hover:scale-110">
              <GiPodiumWinner className="text-white text-2xl" />
            </div>
            <div className="w-12 h-12 bg-[#F20707] flex items-center justify-center shadow-lg rounded-full cursor-pointer hover:scale-110">
              <i className="fas fa-search text-black text-2xl"></i>
            </div>
          </div>
          <Image
            alt="BNA Running Shoes"
            className="transform scale-110 -rotate-12 relative top-0 transition-transform hover:rotate-0 hover:scale-[1.125] z-10"
            src="/images/hero-1.png"
            width={800}
            height={980}
          />
          <Image
            alt="BNA Hero Text"
            className="absolute top-24 left-1/2 transform -translate-x-1/2 scale-125 z-0 opacity-30"
            src="/images/bna-hero-text.svg"
            width={800}
            height={800}
          />
          <div className="absolute bottom-[-60px] -right-32 w-96 h-96 bg-[#F20707] rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
