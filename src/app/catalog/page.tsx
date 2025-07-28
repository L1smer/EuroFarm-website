import Product from "../ui/catalog/Product";
import { JSX } from "react";
import products from "@/app/catalog/products.json";
import MixOil from "./logos/MixOil";
import MixOilPlus from "./logos/MixOilPlus";
import MixOilAquaPlus from "./logos/MixOilPlusAqua";
import AirOil from "./logos/AirOil";
import CoxxOil from "./logos/CoxxOil";
import ImmunOil from "./logos/ImmunOil";
import FourPowerX from "./logos/FourPowerX";
import Wlf from "./logos/Wlf";
import Toxinfibre from "./logos/Toxinfibre"
import PreNat from "./logos/PreNat";

export type productInfoProps = {
  mainText: string;
  logo: string;
  listItems: string[];
  listColor: string;
  availableImgs: {
    src: string;
    size: number;
  }[];
  img: string;
  availableIn: string;
  productText: string;
  tableTitle: string;
  tableP: string;
  dosageInfo: {
    availability: string;
    products: {
      form: string;
      dosage: {
        species: string;
        value: string;
      }[];
    }[];
  };
};

const logoMap: Record<string, JSX.Element> = {
  "MixOil": <MixOil/>,
  "MixOilPlus": <MixOilPlus/>,
  "MixOilAquaPlus": <MixOilAquaPlus/>,
  "AirOil": <AirOil/>,
  "CoxxOil": <CoxxOil/>,
  "ImmunOil": <ImmunOil/>,
  "FourPowerX": <FourPowerX/>,
  "Wlf": <Wlf/>,
  "Toxinfibre": <Toxinfibre/>,
  "PreNat": <PreNat/>,
}

export default function Catalog() {
  return (
    <>
      {products.map((product, i) => (
        <Product key={i} productInfo={product} Logo={logoMap[product.logo]} />
      ))}
    </>
  );
}
