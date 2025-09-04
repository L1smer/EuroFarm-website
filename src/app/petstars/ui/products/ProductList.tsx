"use client";

import { useState, useMemo } from "react";
import products from "../../products/petstarsProducts.json";
import type { Product, FoodType } from "../../lib/types";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

export default function ProductList() {
  const [filters, setFilters] = useState<{
    pet: string | null;
    food: FoodType | null;
    taste: string | null;
  }>({
    pet: null,
    food: null,
    taste: null,
  });

  const filteredProducts = useMemo(() => {
    return (products as Product[]).filter((p) => {
      const petMatch = filters.pet ? p.pet === filters.pet : true;
      const foodMatch = filters.food ? p.type === filters.food : true;
      const tasteMatch = filters.taste
        ? p.variety.some((v) =>
            v.taste.some((t) => t.meat.includes(filters.taste!))
          )
        : true;
      return petMatch && foodMatch && tasteMatch;
    });
  }, [filters]);

  return (
    <section className="flex flex-col 2xl:flex-row justify-center items-center gap-10 2xl:gap-0 2xl:items-start min-h-screen py-40 w-full 2xl:pr-40 2xl:pl-10 mx-auto">
      <Filter onChange={setFilters} />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {filteredProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ul>
    </section>
  );
}
