import React from "react";

export default function SuperQuality() {
  return (
    <section className="p-4 py-2 text-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div
            className="flex w-full rounded-xl p-8 min-h-[400px] md:min-h-[600px] lg:min-h-[800px] bg-cover bg-center"
            style={{
              backgroundImage: 'url("../images/bna-people-04.jpeg")',
            }}
          >

          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-full rounded-xl p-8 bg-black text-white shadow-xl">
              <h1 className="text-2xl lg:text-4xl mb-auto pb-10">
                <span className="text-white font-bold">
                  BE NICE AUTHENTICALLY (BNA)
                </span>{" "}
              </h1>
              <p className="text-gray-50 mb-4 text-sm">
                <span className="text-[#F20707] font-bold">
                  BE NICE AUTHENTICALLY (BNA)
                </span>{" "}
                is not merely a sneaker; it encapsulates a narrative of genuine
                patriotism and authenticity. It serves as a tangible
                representation of our commitment to preserving the roots from
                which we hail, recognizing the swift transformations occurring
                globally and the fading of numerous cultures. Our sneakers are a
                conscious effort to leave indelible imprints of our heritage for
                the benefit of future generations. In each design, we articulate
                the captivating beauty, language, and culture of the people of
                Bantu (Sotho, Xhosa & Zulu, etc.), seamlessly blending modernity
                with the rich traditions of the Bantu People of Africa.
              </p>
              <p className="text-gray-50 mb-4">
                The BNA Prime Eco-Mesh Sneakersrepresent a groundbreaking
                collection of mesh footwear that seamlessly integrates Basotho
                design, style, comfort, and sustainability. Engineered with a
                climate- friendly approach, these sneakers are crafted to
                minimize environmental impact without compromising on
                performance or cutting-edge fashion aesthetics. Additionally,
                the designs eloquently showcase the rich cultural heritage of
                the Basotho people.
              </p>
            </div>
            <div className="h-full flex flex-col md:flex-row gap-4">
              <a
                href=""
                className="min-h-[150px] flex w-full overflow-hidden rounded-xl bg-cover bg-no-repeat"
                style={{
                  backgroundImage: 'url("../images/bna-offer-02.jpeg")',
                }}
              >
                <p className="text-white text-lg font-bold mt-auto w-full p-2 bg-black bg-opacity-70">
                  #BNA
                </p>
              </a>
              <a
                href=""
                className="min-h-[150px] flex w-full overflow-hidden rounded-xl bg-cover object-cover bg-no-repeat"
                style={{
                  backgroundImage: 'url("../images/bna-people-06.jpeg")',
                }}
              >
                <p className="text-white text-lg font-bold mt-auto w-full p-2 bg-black bg-opacity-70">
                  #MOKOROTLO_DESIGN
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
