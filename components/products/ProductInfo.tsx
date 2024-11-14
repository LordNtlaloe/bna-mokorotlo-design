"use client";

import { getProductById } from "@/app/_actions/_productsActions";
import { MapPin, Star, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { useCart } from "@/apis/CartContext";
import Swal from "sweetalert2";
import DisplayRatings from "./DislayRatings";
import ProductRatings from "./ProductRating";
import SimilarProducts from "./SimilarProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductInfo = ({ id }: { id: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState<any>({});
  const { addToCart } = useCart();
  let imageURL = "/placeholder-image.jpg";
  if (product?.image && product.image !== "undefined") {
    imageURL = product.image;
  }

  // Define getProduct inside useCallback to avoid unnecessary re-renders
  const getProduct = useCallback(async () => {
    if (id) {
      const productById = await getProductById(id);
      setProduct(productById);
      setIsLoaded(true);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const handleAddToCart = () => {
    try {
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      });

      Swal.fire({
        title: "Success!",
        text: `${product.name} has been added to the cart`,
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add the product to the cart",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="relative w-full aspect-w-4 aspect-h-3 lg:aspect-h-2">
          <div className="absolute inset-0">
            <Image
              src={imageURL}
              alt={product?.name || "Product Image"}
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-sm shadow-red-700"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4 lg:hidden">
          <Image
            src={imageURL}
            alt={product?.name || "Product Image"}
            width={64}
            height={64}
            className="w-16 h-16 cursor-pointer rounded-md shadow-sm shadow-red-700"
          />
          <Image
            src={imageURL}
            alt={product?.name || "Product Image"}
            width={64}
            height={64}
            className="w-16 h-16 cursor-pointer rounded-md shadow-sm shadow-red-700"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-2 font-bold">
            Category: <span className="text-[#8C142A] font-normal">{product.category}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2 font-bold">
            Availability: <span className="text-green-600 font-normal">{product.status}</span>
          </p>

          <hr className="my-6" />

          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <p className="text-gray-800 text-3xl font-bold">M{product?.price}</p>
            </div>

            <div className="flex flex-wrap gap-4 lg:ml-auto">
              <button
                type="button"
                className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
              >
                <Heart className="w-4 h-4 mr-1" />
                {product?.wishlistCount || 0}
              </button>
              <button
                type="button"
                className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
              >
                <Star className="w-4 h-4 mr-1" />
                {product?.ratingsAverage || 0} ({product?.ratingsCount || 0} reviews)
              </button>
            </div>
          </div>

          <hr className="my-6" />

          <div>
            <h3 className="text-xl font-bold text-gray-800">Choose A Size</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                className="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center"
              >
                6
              </button>
              <button
                type="button"
                className="w-10 h-10 border border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center"
              >
                7
              </button>
              <button
                type="button"
                className="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center"
              >
                8
              </button>
              <button
                type="button"
                className="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center"
              >
                9
              </button>
            </div>
          </div>

          <hr className="my-6" />

          <div>
            <h3 className="text-xl font-bold text-gray-800">Choose A Color</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                className="w-10 h-10 bg-black border border-white hover:border-gray-800 rounded-md"
              ></button>
              <button
                type="button"
                className="w-10 h-10 bg-sky-400 border border-white hover:border-gray-800 rounded-md"
              ></button>
              <button
                type="button"
                className="w-10 h-10 bg-[#F20707] border border-white hover:border-gray-800 rounded-md"
              ></button>
              <button
                type="button"
                className="w-10 h-10 bg-amber-900 border border-white hover:border-gray-800 rounded-md"
              ></button>
            </div>
          </div>

          <hr className="my-6" />

          <div>
            <p className="text-gray-800 text-sm py-3 cursor-pointer transition-all">
              {product?.description}
            </p>
            <hr className="my-6" />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#F20707] hover:bg-[#F2071B] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex items-center justify-center w-full lg:w-auto"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-[#F20707] hover:bg-[#F2071B] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg flex items-center justify-center w-full lg:w-auto"
            >
              <Heart className="w-5 h-5 mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="similar-products" className="text-[#0D0D0D] mt-8">
        <TabsList className="w-full border border-1 border-[#F20707]">
          <TabsTrigger value="similar-products" className="text-[#F20707]">Similar Products</TabsTrigger>
          <TabsTrigger value="ratings">Ratings</TabsTrigger>
        </TabsList>
        <TabsContent value="similar-products" className="w-full mt-4">
          <SimilarProducts category={product?.category} currentProductId={product._id} />
        </TabsContent>
        <TabsContent value="ratings" className="w-full mt-4">
          <DisplayRatings productId={product._id} />
          <ProductRatings isReadOnly={false} isEnabled={true} product={product}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductInfo;
