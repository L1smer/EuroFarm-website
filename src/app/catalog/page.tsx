"use client";

import Product from "../ui/catalog/Product";
import Select, { MultiValue } from "react-select";
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
import MustGel from "./logos/MustGel";
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

type AnimalOption = { value: string; label: string };

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
  ForLife: <ForLife />,
  Dermosan: <Dermosan />,
  MustGel: <MustGel />,
  MustTwo: <MustTwo />,
};

const animalOptions: AnimalOption[] = [
  { value: "птахи", label: "Птахи" },
  { value: "свині", label: "Свині" },
  { value: "жуйні тварини", label: "Жуйні тварини" },
  { value: "риба", label: "Риба" },
  { value: "креветки", label: "Креветки" },
  { value: "аквакультура", label: "Аквакультура" },
  { value: "телята", label: "Телята" },
];

export default function Catalog() {
  const [selectedAnimals, setSelectedAnimals] = useState<AnimalOption[]>([]);
  const filterAnimals = selectedAnimals.map((o) => o.value);
  const handleAnimalChange = (opts: MultiValue<AnimalOption> | null) =>
    setSelectedAnimals(opts ? [...opts] : []);

  const filteredProducts: productInfoProps[] = products.filter(
    (product: productInfoProps) => {
      if (filterAnimals.length === 0) {
        return true;
      }
      return filterAnimals.some((animal) =>
        product.availableIn.includes(animal)
      );
    }
  );

  return (
    <div className="max-w-[1600px] flex flex-col my-40 p-10 mx-auto">
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

      <div className="flex flex-col gap-30 lg:gap-40">
        {filteredProducts.map((product, i) => (
          <Product
            key={i}
            productInfo={product}
            Logo={logoMap[product.logo]}
            animals={filterAnimals}
          />
        ))}
      </div>
    </div>
  );
}
