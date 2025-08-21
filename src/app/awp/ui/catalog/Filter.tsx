import { linearGradient } from "motion/react-client";
import Image from "next/image";
import { sora } from "../../lib/fonts";
import { ChevronRight } from "lucide-react";
import { ProductInfo } from "../../lib/types/productTypes";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Filter({
  animalsFilterOptions,
  handleAnimalChange,
  selectedAnimals,
}: {
  animalsFilterOptions: string[];
  handleAnimalChange: (opts: string) => void;
  selectedAnimals: string[];
}) {
  return (
    <div className="w-full flex flex-col">
      <div
        className="w-full flex justify-between items-center border-b-2 pb-[10px] mb-[25px]"
        style={{
          borderImage:
            "linear-gradient(262deg, #7cb41c 14.51%, #386bb7 95.96%) 30",
        }}
      >
        <h5 className={`${sora.className} antialiased text-[25px]`}>Фільтр</h5>
        <ChevronRight size={18} />
      </div>
      <div className="grid grid-cols-2 gap-[10px]">
        {animalsFilterOptions.map((animal) => (
          <div key={animal} className="w-[130px] h-[107px] group/button">
            <AnimalButton
              selectedAnimals={selectedAnimals}
              animal={animal}
              handleAnimalChange={handleAnimalChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimalButton({
  animal,
  handleAnimalChange,
  selectedAnimals,
}: {
  animal: string;
  handleAnimalChange: (opts: string) => void;
  selectedAnimals: string[];
}) {
  const isActive = selectedAnimals.includes(animal);

  return (
    <button
      onClick={() => handleAnimalChange(animal)}
      className={clsx(
        "cursor-pointer rounded-3xl p-4 flex flex-col gap-[6px] transition justify-center items-center border w-full h-full border-[#777] group-hover/button:text-white group-hover/button:bg-accent",
        { "bg-accent text-white": isActive }
      )}
    >
      <Image
        src={`/awp/animals-imgs/${animal}.svg`}
        width={150}
        height={150}
        alt={animal}
        className={clsx(
          "w-[42px] h-[42px] transition group-hover/button:invert group-hover/button:brightness-0 group-hover/button:hue-rotate-180",
          { "invert brightness-0 hue-rotate-180": isActive }
        )}
      />
      <p className="text-[12px] uppercase">{animal}</p>
    </button>
  );
}
