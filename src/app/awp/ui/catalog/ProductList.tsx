"use client";

import { useState } from "react";
import type { ProductInfo } from "@/app/awp/lib/types/productTypes";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

type AnimalOption = { value: string; label: string };

export const animalOptions: AnimalOption[] = [
  { value: "птахи", label: "Птахи" },
  { value: "свині", label: "Свині" },
  { value: "жуйні тварини", label: "Жуйні тварини" },
  { value: "аквакультура", label: "Аквакультура" },
  { value: "телята", label: "Телята" },
];

export const allAnimals = animalOptions.map((o) => o.value);

export default function ProductList({ products }: { products: ProductInfo[] }) {
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);

  const handleAnimalChange = (opts: string) => {
    if (selectedAnimals.includes(opts)) {
      setSelectedAnimals((prev) => prev.filter((animal) => animal !== opts));
    } else {
      setSelectedAnimals((prev) => [...prev, opts]);
    }
  };

  const filteredProducts: ProductInfo[] = products.filter(
    (product: ProductInfo) => {
      if (selectedAnimals.length === 0) {
        return true;
      }
      return selectedAnimals.every((animal) =>
        product.availableIn.includes(animal)
      );
    }
  );
  return (
    <section className="container w-full mt-[150px]  bg-white min-h-screen mx-auto ">
      <div className="max-w-[1420px] flex gap-5 px-2 sm:p-5 mx-auto">
        <Filter
          animalsFilterOptions={allAnimals}
          handleAnimalChange={handleAnimalChange}
        />

        <div className="grid grid-cols-3 items-start mt-15 md:mt-0 gap-10">
          {filteredProducts.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
