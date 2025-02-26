import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="bg-gradient-to-r from-[#F20707] to-red-900 overflow-hidden">
            <div className="bg-[url('/images/h5-bg01.png')] grid md:grid-cols-3 gap-6 min-h-[200px] h-80 py-8 p-16">
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold text-white">Try Our Ubuntu Pulse Design</h1>
                    <p className="text-base text-white mt-4">
                        The BNA mesh tech performance running sneakers represent a groundbreaking collection
                        of mesh footware that seamlessly integrates Bantu cultures(Sotho, Zulu, Xhosa), design 
                        style, comfort, and sustainability, engineered with a climate friendly approach, these 
                        sneakers are also crafted to minimize environmental impact without compromising on performance 
                        or cutting edge fashion aesthetics. Additionally, the designs eloquently showcase the rich 
                        cultural heritage of the African Bantu People.
                    </p>    

                    <Link href="/products" className="">
                        <div className="bg-black w-40 rounded-md">
                            <p className="my-4 py-3 px-5 text-xl font-semibold text-white top-20 rounded-md">
                                Shop Now
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="relative max-md:hidden -left-20 -top-20 -rotate-12">
                    <Image
                        src="/hero-img.png"
                        alt="Banner Image"
                        className="md:absolute w-full h-auto"
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>
        </div>
    );
}
