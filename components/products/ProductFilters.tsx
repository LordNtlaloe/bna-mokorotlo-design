'use client';
import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Filter } from 'lucide-react';

type FilterProps = {
  categories: string[];
  colors: string[];
  sizes: string[];
  priceRange: { min: number; max: number };
  onFilterChange: (filters: { category: string; color: string; size: string; price: number[] }) => void;
};

export default function ProductFilters({
  categories,
  colors,
  sizes,
  priceRange,
  onFilterChange,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedColor, setSelectedColor] = useState<string>('All Colors');
  const [selectedSize, setSelectedSize] = useState<string>('All Sizes');
  const [selectedPrice, setSelectedPrice] = useState<number[]>([priceRange.min, priceRange.max]);
  const [previousFilters, setPreviousFilters] = useState({
    category: '',
    color: '',
    size: '',
    price: [priceRange.min, priceRange.max],
  });

  useEffect(() => {
    if (selectedPrice[0] !== priceRange.min || selectedPrice[1] !== priceRange.max) {
      setSelectedPrice([priceRange.min, priceRange.max]);
    }
  }, [priceRange, selectedPrice]);

  useEffect(() => {
    const newFilters = {
      category: selectedCategory !== 'All Categories' ? selectedCategory : '',
      color: selectedColor !== 'All Colors' ? selectedColor : '',
      size: selectedSize !== 'All Sizes' ? selectedSize : '',
      price: selectedPrice,
    };

    if (
      newFilters.category !== previousFilters.category ||
      newFilters.color !== previousFilters.color ||
      newFilters.size !== previousFilters.size ||
      newFilters.price !== previousFilters.price
    ) {
      onFilterChange(newFilters);
      setPreviousFilters(newFilters);
    }
  }, [selectedCategory, selectedColor, selectedSize, selectedPrice, onFilterChange, previousFilters.category, previousFilters.color, previousFilters.size, previousFilters.price]);

  return (
    <div className="lg:block">
      <div className="block lg:hidden">
        <button className="w-full text-white bg-[#F20707] p-2 rounded-md flex items-center justify-center space-x-2">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="bg-[#0D0D0D] p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-[#F20707]">Filter Products</h2>

        <Accordion type="multiple" className="space-y-4">
          {/* Category Filter */}
          <AccordionItem value="category">
            <AccordionTrigger className="text-gray-100 font-medium">Category</AccordionTrigger>
            <AccordionContent>
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-[#1D1D1D] text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </AccordionContent>
          </AccordionItem>

          {/* Color Filter */}
          <AccordionItem value="color">
            <AccordionTrigger className="text-gray-100 font-medium">Color</AccordionTrigger>
            <AccordionContent>
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-[#1D1D1D] text-white"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option>All Colors</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </AccordionContent>
          </AccordionItem>

          {/* Size Filter */}
          <AccordionItem value="size">
            <AccordionTrigger className="text-gray-100 font-medium">Size</AccordionTrigger>
            <AccordionContent>
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded-md text-white bg-[#1D1D1D]"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option>All Sizes</option>
                {sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </AccordionContent>
          </AccordionItem>

          {/* Price Range */}
          <AccordionItem value="price">
            <AccordionTrigger className="text-gray-100 font-medium">Price Range</AccordionTrigger>
            <AccordionContent>
              <Slider
                min={priceRange.min}
                max={priceRange.max}
                step={1}
                value={selectedPrice}
                onValueChange={setSelectedPrice}
                className="w-full mt-2 text-white"
              />
              <div className="flex justify-between mt-2 text-white">
                <span>M{selectedPrice[0]}</span>
                <span>M{selectedPrice[1]}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
