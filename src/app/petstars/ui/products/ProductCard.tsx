"use client";

import { useState,useEffect } from "react";
import type { Product, Variety } from "../../lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [variant, setVariant] = useState<Variety>(product.variety[0]);
  const [meat, setMeat] = useState<string>(product.variety[0].taste[0].meat);

  useEffect(() => {
    setVariant(product.variety[0]);
    setMeat(product.variety[0].taste[0].meat);
  }, [product]);

  const img = (variant: Variety, meat: string) => {
    const choosedMeat = variant.taste.find((obj) => obj.meat === meat);
    return choosedMeat?.img ?? "";
  };

  function onChangeVariant(weight: string): void {
    const found = product.variety.find((obj) => obj.weight === weight);
    if (found) {
      setVariant(found);
      setMeat(found.taste[0].meat);
    }
  }

  return (
    <li className="relative group rounded-t-3xl hover:shadow-xl w-80 bg-[#E7F0FA]">
      <div className="flex flex-col justify-center items-center gap-5 p-6">
        {/* Image */}
        <div className="w-full h-40 flex items-center justify-center">
          <img
            src={img(variant, meat)}
            alt={product.title}
            className="object-contain max-h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 text-center">
          <span className="font-bold text-lg text-gray-800">
            {product.title}
          </span>

          {/* Weight Options */}
          <div className="flex flex-col gap-2">
            <span className="text-secondary text-sm uppercase tracking-wide">
              Фасування
            </span>
            <div
              className={`grid grid-cols-${
                product.variety.length === 1 ? "1" : "2"
              } gap-2 justify-items-stretch w-full`}
            >
              {product.variety.map((v, i) => (
                <button
                  key={i}
                  onClick={() => onChangeVariant(v.weight)}
                  className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-all shadow 
                  ${
                    variant.weight === v.weight
                      ? "bg-accent text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-accent hover:text-white"
                  }`}
                >
                  {v.weight}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="group-hover:flex hidden flex-col justify-start items-center gap-2 absolute z-10 min-h-30 px-3 pb-5 bg-[#E7F0FA] w-full shadow-xl rounded-b-3xl ">
        <span className="text-secondary text-sm uppercase tracking-wide">
          Смаки
        </span>
        <div
          className={`grid grid-cols-${
            variant.taste.length === 1 ? "1" : "2"
          } gap-2 justify-items-stretch w-full`}
        >
          {variant.taste.map((obj, i) => (
            <button
              key={i}
              onClick={() => setMeat(obj.meat)}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-all shadow 
              ${
                meat === obj.meat
                  ? "bg-accent text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-accent hover:text-white"
              }`}
            >
              {obj.meat}
            </button>
          ))}
        </div>
      </div>
    </li>
  );
}
