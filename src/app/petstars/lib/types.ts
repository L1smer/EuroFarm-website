export type FoodType = "сухий" | "вологий";

export interface Taste {
  meat: string;
  img: string;
}

export interface Variety {
  weight: string;
  taste: Taste[];
}

export interface Product {
  pet: string;
  type: FoodType;
  title: string;
  variety: Variety[];
}