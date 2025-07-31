"use client";

import Product from "../ui/catalog/Product";
import { ChevronDown } from "lucide-react";
import { JSX, useState, useRef } from "react";
import { useClickOutside } from "./hooks/useClickOutside";
import products from "@/app/catalog/products.json";
import MixOil from "./logos/MixOil";
import MixOilPlus from "./logos/MixOilPlus";
import MixOilPlusAqua from "./logos/MixOilPlusAqua";
import AirOil from "./logos/AirOil";
import CoxxOil from "./logos/CoxxOil";
import ImmunOil from "./logos/ImmunOil";
import FourPowerX from "./logos/FourPowerX";
import Wlf from "./logos/Wlf";
import Toxinfibre from "./logos/Toxinfibre";
import PreNat from "./logos/PreNat";
import ForLife from "./logos/ForLife";
import Dermosan from "./logos/Dermosan";
import MustGel from './logos/MustGel'
import MustTwo from "./logos/MustTwo";

export type productInfoProps = {
  mainText: string;
  logo: string;
  listItems: string[];
  listColor: string;
  availableImgs: {
    src: string;
  }[];
  img: string;
  availableIn: string[];
  productText: string;
  dosageInfo: {
    availability: string;
    products: {
      form?: string;
      productInfo: {
        species: string;
        value: string;
      }[];
    }[];
  };
};

const logoMap: Record<string, JSX.Element> = {
  MixOil: <MixOil />,
  MixOilPlus: <MixOilPlus />,
  MixOilPlusAqua: <MixOilPlusAqua />,
  AirOil: <AirOil />,
  CoxxOil: <CoxxOil />,
  ImmunOil: <ImmunOil />,
  FourPowerX: <FourPowerX />,
  Wlf: <Wlf />,
  Toxinfibre: <Toxinfibre />,
  PreNat: <PreNat />,
  ForLife: <ForLife/>,
  Dermosan: <Dermosan/>,
  MustGel: <MustGel/>,
  MustTwo: <MustTwo/>
};

export default function Catalog() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null!);
  const [filterAnimals, setFilterAnimals] = useState<string[]>([]);
  const animals = [
    "птахи",
    "свині",
    "жуйні тварини",
    "риба",
    "креветки",
    "аквакультура",
    "телята"
  ];

  useClickOutside(dropdownRef, () => setOpen(false));

  function onFilterChange(animal: string): void {
    setFilterAnimals((prev) =>
      prev.includes(animal)
        ? prev.filter((item) => item !== animal)
        : [...prev, animal]
    );
  }

  const filteredProducts:productInfoProps[] = products.filter((product:productInfoProps) => {
    if (filterAnimals.length === 0) {
      return true;
    }
    return filterAnimals.some((animal) => product.availableIn.includes(animal));
  });

  return (
    <div className="max-w-[1600px] flex flex-col my-40 p-10 mx-auto">
      <div ref={dropdownRef} className="relative self-end text-left">
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer flex items-center gap-1 px-4 py-1.5 bg-stone-300 hover:bg-stone-200 rounded-full text-sm font-bold uppercase text-black transition"
        >
          Фільтр по тваринам
          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="flex py-2 px-3 flex-col absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg ring-1 ring-black/10 z-50 max-h-60 overflow-y-auto transition-all">
            <ul className="space-y-1 mb-3">
              {animals.map((animal) => (
                <li key={animal} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    id={animal}
                    checked={filterAnimals.includes(animal)}
                    onChange={() => onFilterChange(animal)}
                    className="accent-yellow-500"
                  />
                  <label htmlFor={animal} className="cursor-pointer">
                    {animal}
                  </label>
                </li>
              ))}
            </ul>
            <button
              className="self-end cursor-pointer bg-stone-300/30 hover:bg-white/40 transition rounded-full border-1 border-black/30 px-2 py-1 text-sm"
              onClick={() => setFilterAnimals((prev) => (prev = []))}
            >
              Очистити
            </button>
          </div>
        )}
      </div>

      <div className="mt-20 flex flex-col gap-30 lg:gap-40">
        {filteredProducts.map((product, i) => (
          <Product
            key={i}
            productInfo={product}
            Logo={logoMap[product.logo]}
            animals={animals}
          />
        ))}
      </div>
    </div>
  );
}
