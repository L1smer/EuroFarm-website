"use client";

import { useEffect, useRef, useState } from "react";
import type { ProductInfo } from "@/app/awp/lib/types/productTypes";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { sora } from "../../lib/fonts";
import { ListFilterPlus, X } from "lucide-react";
import { clsx } from "clsx";

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
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const btnRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFilterOpen(false);
    };
    if (isFilterOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isFilterOpen]);

  useEffect(() => {
    const btn = btnRef.current;
    const sentinel = sentinelRef.current;
    if (!btn || !sentinel) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        if (visible) {
          btn.style.opacity = "1";
          btn.style.pointerEvents = "auto";
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

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
    <section className="relative w-full bg-white min-h-screen">
      <div className="max-w-[1420px] flex justify-center itmes-center sm:mt-[100px] xl:mt-[150px] 2xl:gap-5 sm:px-2 sm:p-5 mx-auto">
        <div className="w-[305px] h-auto mx-[20px] hidden 2xl:block">
          <Filter
            selectedAnimals={selectedAnimals}
            animalsFilterOptions={allAnimals}
            handleAnimalChange={handleAnimalChange}
          />
        </div>
        <div
          ref={btnRef}
          className="absolute top-1 md:-top-17 opacity-0 transition-opacity duration-300 right-0 max-w-40 h-full 2xl:hidden pointer-events-none"
        >
          <div className="sticky z-20 top-[200px] md:top-[155px]">
            <button
              onClick={() => setIsFilterOpen(true)}
              style={{
                borderImage:
                  "linear-gradient(#7cb41c 14.51%, #386bb7 95.96%) 30",
              }}
              className="cursor-pointer h-[50px] group inline-flex 2xl:hidden rounded-l-full pt-[2px] pb-[2px] pl-[2px] bg-gradient-to-r from-blue-600 to-green-500"
            >
              <div
                className="flex items-center gap-5 rounded-l-full px-3 pt-3 pb-3 bg-white text-primary font-medium transition-colors duration-300
           group-hover:bg-transparent group-hover:text-white"
              >
                <h5
                  className={`${sora.className} hidden md:block antialiased text-[25px]`}
                >
                  Фільтр
                </h5>
                <ListFilterPlus />
              </div>
            </button>
          </div>
        </div>

        <div ref={sentinelRef} aria-hidden className="h-px w-px" />

        <div
          className={clsx(
            "fixed inset-0 z-40 transition-opacity duration-300",
            "bg-black/50",
            isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            "motion-reduce:transition-none"
          )}
          onClick={() => setIsFilterOpen(false)}
        />

        <div
          className={clsx(
            "fixed inset-y-0 right-0 z-50 w-[320px] h-screen",
            "bg-white shadow-2xl border-l border-gray-200 p-5",
            "transition-transform duration-300 will-change-transform",
            isFilterOpen ? "translate-x-0" : "translate-x-full",
            "motion-reduce:transition-none motion-reduce:transform-none flex flex-col justify-start"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="self-end mb-9"
            onClick={() => setIsFilterOpen(false)}
            aria-label="Close menu"
          >
            <X size={30} />
          </button>
          <Filter
            selectedAnimals={selectedAnimals}
            animalsFilterOptions={allAnimals}
            handleAnimalChange={handleAnimalChange}
          />
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-15 md:mt-0 gap-20 sm:gap-10">
          {filteredProducts.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
