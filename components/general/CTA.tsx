import Image from 'next/image';
import React from 'react';

const CTA = () => {
  return (
    <section className="py-10 sm:py-5 bg-slate-50  mx-16 rounded-lg" aria-label="service">
      <div className="container mx-auto px-4">

        <Image
          src="/logo.png"
          width={180}
          height={180}
          loading="lazy"
          alt=""
          className="mx-auto my-auto"
        />

        <h2 className="text-center text-4xl mb-14 text-[#0D0D0D] font-bold">
          <span className="text-[#F20707]">Rise Above,</span> Fear.
        </h2>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '/delivery-truck.svg',
              title: 'Free Same-Day Delivery',
              text: 'Order by 2pm local time to get free delivery on orders R35+ today.'
            },
            {
              icon: '/package-return.svg',
              title: '30 Day Return',
              text: '35% off your first order plus 5% off all future orders.'
            },
            {
              icon: '/secure-payment.svg',
              title: 'Security payment',
              text: '25% off your online order of R50+. Available at most locations.'
            },
            {
              icon: '/support.svg',
              title: '24/7 Support',
              text: 'Shop online to get orders over R35 shipped fast and free.'
            }
          ].map((service, index) => (
            <li key={index}>
              <div className="text-center p-4 shadow-sm shadow-[#F20707] rounded-lg bg-white flex flex-col items-center justify-between h-64 w-full">
                <figure className="mx-auto mb-4">
                  <Image
                    src={service.icon}
                    width={70}
                    height={70}
                    loading="lazy"
                    alt="service icon"
                  />
                </figure>
                <h3 className="text-xl font-bold text-[#F20707] mb-2">{service.title}</h3>
                <p className="text-slate-700">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default CTA;
