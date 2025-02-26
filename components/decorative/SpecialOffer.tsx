import React from "react";
import Image from "next/image";

export default function SpecialOffer() {
  const features = [
    {
      name: "BNA Mokorotlo Design",
      description:
        "Eco-mesh casual sneakers integrating Basotho design. Climate-friendly, minimizing environmental impact, and balancing style, comfort, and sustainability without compromising performance.",
    },
    {
      name: "Ubuntu Pulse Sneaker",
      description:
        "Mesh tech performance running sneakers inspired by Bantu cultures (Sotho, Zulu, Xhosa). Designed for sustainability, performance, and cutting-edge fashion aesthetics while honoring African heritage.",
    },
  ];

  return (
    <div className="">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#F20707] sm:text-4xl">
            Special Edition Sneakers
          </h2>
          <p className="mt-4 text-gray-50">
            Discover our latest sneaker collection that blends cultural heritage
            with modern performance and sustainability.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-red-600">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-50">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="relative rounded-lg bg-gray-100">
            <Image
              alt="BNA Mokorotlo Design Sneaker"
              src="/images/bna-mokorotlo.jpeg"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="relative rounded-lg bg-gray-100">
            <Image
              alt="Ubuntu Pulse Sneaker"
              src="/images/bna-mesh.jpeg"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="relative rounded-lg bg-gray-100">
            <Image
              alt="Ubuntu Pulse Sneaker"
              src="/images/bna-shoe-1.jpeg"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="relative rounded-lg bg-gray-100">
            <Image
              alt="BNA Mokorotlo Design Sneaker"
              src="/images/bna-mokorotlo.jpeg"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
