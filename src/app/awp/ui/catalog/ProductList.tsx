"use client";

import Product from "@/app/awp/ui/catalog/Product";
import Select, { MultiValue } from "react-select";
import { useState } from "react";
import type { ProductInfo } from "@/app/awp/lib/types/productTypes";
import ProductCard from "./ProductCard";

type AnimalOption = { value: string; label: string };

export const animalOptions: AnimalOption[] = [
  { value: "птахи", label: "Птахи" },
  { value: "свині", label: "Свині" },
  { value: "жуйні тварини", label: "Жуйні тварини" },
  { value: "риба", label: "Риба" },
  { value: "креветки", label: "Креветки" },
  { value: "аквакультура", label: "Аквакультура" },
  { value: "телята", label: "Телята" },
];

export const allAnimals = animalOptions.map((o) => o.value);

export default function ProductList({ products }: { products: ProductInfo[] }) {
  const [selectedAnimals, setSelectedAnimals] = useState<AnimalOption[]>([]);
  const filterAnimals = selectedAnimals.map((o) => o.value);

  const handleAnimalChange = (opts: MultiValue<AnimalOption> | null) =>
    setSelectedAnimals(opts ? [...opts] : []);

  const filteredProducts: ProductInfo[] = products.filter(
    (product: ProductInfo) => {
      if (filterAnimals.length === 0) {
        return true;
      }
      return filterAnimals.some((animal) =>
        product.availableIn.includes(animal)
      );
    }
  );
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1600px] flex flex-col gap-10 px-2 sm:p-10 mx-auto">
        <div className="flex w-full justify-end">
          <Select
            options={animalOptions}
            isMulti
            closeMenuOnSelect={false}
            placeholder="Фільтр по тваринам..."
            value={selectedAnimals}
            onChange={handleAnimalChange}
            className="w-full sm:max-w-sm"
            styles={{
              control: (base) => ({ ...base, borderRadius: 8 }),
              menu: (base) => ({ ...base, zIndex: 30 }),
            }}
          />
        </div>

        <div className="grid grid-cols-3 mt-15 md:mt-0 gap-30 lg:gap-40">
          {filteredProducts.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
