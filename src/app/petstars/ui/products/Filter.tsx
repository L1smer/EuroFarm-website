"use client";

import { useState } from "react";
import Select from "react-select";
import type { FoodType } from "../../lib/types";
import { Cat } from "lucide-react";
import { Dog } from "lucide-react";

interface FilterProps {
  onChange: (filters: {
    pet: string | null;
    food: FoodType | null;
    taste: string | null;
  }) => void;
}

export default function Filter({ onChange }: FilterProps) {
  const [pet, setPet] = useState<string | null>(null);
  const [food, setFood] = useState<FoodType | null>(null);
  const [taste, setTaste] = useState<string | null>(null);

  const foodOptions = [
    { value: "сухий", label: "Сухий корм" },
    { value: "вологий", label: "Вологий корм" },
  ];

  const tasteOptions = [
    { value: "Курка", label: "Курка" },
    { value: "Яловичина", label: "Яловичина" },
    { value: "Печінка", label: "Печінка" },
    { value: "Оленина", label: "Оленина" },
    { value: "Баранина", label: "Баранина" },
    { value: "Риба", label: "Риба" },
    { value: "Лосось", label: "Лосось" },
    { value: "Індичка", label: "Індичка" },
    { value: "Кролик", label: "Кролик" },
  ];

  function handlePetChange(newPet: string | null) {
    const updatedPet = pet === newPet ? null : newPet;
    setPet(updatedPet);
    onChange({ pet: updatedPet, food, taste });
  }

  function handleFoodChange(selected: any) {
    const newFood = selected ? (selected.value as FoodType) : null;
    setFood(newFood);
    onChange({ pet, food: newFood, taste });
  }

  function handleTasteChange(selected: any) {
    const newTaste = selected ? (selected.value as string) : null;
    setTaste(newTaste);
    onChange({ pet, food, taste: newTaste });
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm 2xl:max-w-md mx-auto">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handlePetChange("кіт")}
          className={`px-4 py-2 flex flex-col justify-center items-center rounded-2xl w-30 h-15 font-medium transition shadow ${
            pet === "кіт"
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-accent hover:text-white"
          }`}
        >
          <Cat />
          <span>Кіт</span>
        </button>
        <button
          onClick={() => handlePetChange("собака")}
          className={`px-4 py-2 rounded-2xl w-30 h-15 flex flex-col justify-center items-center font-medium transition shadow ${
            pet === "собака"
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-accent hover:text-white"
          }`}
        >
          <Dog />
          <span>собака</span>
        </button>
      </div>

      <Select
        placeholder="Оберіть тип корму..."
        options={foodOptions}
        value={foodOptions.find((opt) => opt.value === food) || null}
        onChange={handleFoodChange}
        isClearable
      />

      <Select
        placeholder="Оберіть смак..."
        options={tasteOptions}
        value={tasteOptions.find((opt) => opt.value === taste) || null}
        onChange={handleTasteChange}
        isClearable
      />
    </div>
  );
}
