import { StaticImageData } from "next/image";
import React from "react";

type ShoeCardProps = {
  imgURL: {
    thumbnail: string | StaticImageData;
    bigShoe: string | StaticImageData;
  };
  changeBigShoeImage: (shoe: string | StaticImageData) => void;
  bigShoeImg: string | StaticImageData;
};

export default function ShoeCard({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: ShoeCardProps) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  const isActive = bigShoeImg === imgURL.bigShoe;

  return (
    <div
      className={`border-2 rounded-xl ${
        isActive ? "border-red-500" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={typeof imgURL.thumbnail === "string" ? imgURL.thumbnail : ""}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
}
