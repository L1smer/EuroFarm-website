"use client";

import Product from "@/app/awp/ui/catalog/Product";
import Select, { MultiValue } from "react-select";
import { JSX, useState } from "react";
import type { ProductInfo } from "@/app/awp/lib/types/productTypes";

import MixOil from "@/app/awp/logos/MixOil";
import MixOilPlus from "@/app/awp/logos/MixOilPlus";
import MixOilPlusAqua from "@/app/awp/logos/MixOilPlusAqua";
import AirOil from "@/app/awp/logos/AirOil";
import CoxxOil from "@/app/awp/logos/CoxxOil";
import ImmunOil from "@/app/awp/logos/ImmunOil";
import FourPowerX from "@/app/awp/logos/FourPowerX";
import Wlf from "@/app/awp/logos/Wlf";
import Toxinfibre from "@/app/awp/logos/Toxinfibre";
import PreNat from "@/app/awp/logos/PreNat";
import ForLife from "@/app/awp/logos/ForLife";
import Dermosan from "@/app/awp/logos/Dermosan";
import MustGel from "@/app/awp/logos/MustGel";
import MustTwo from "@/app/awp/logos/MustTwo";

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

export default function ProductList({ products }: { products: any }) {
  const [selectedAnimals, setSelectedAnimals] = useState<AnimalOption[]>([]);
  const allAnimals = animalOptions.map((o) => o.value);
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
      <div className="max-w-[1600px] flex flex-col px-2 sm:p-10 mx-auto">
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

        <div className="flex flex-col mt-15 md:mt-0 gap-30 lg:gap-40">
          {filteredProducts.map((product, i) => (
            <Product
              key={i}
              productInfo={product}
              Logo={logoMap[product.logo]}
              animals={allAnimals}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
