import { getProducts } from "../../lib/getProducts";
import { JSX } from "react";
import Product from "../../ui/catalog/Product";
import { allAnimals } from "../../ui/catalog/ProductList";

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
import { ProductInfo } from "../../lib/types/productTypes";

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

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ product: ProductInfo }>;
  searchParams: Promise<{ productTitle: string }>;
}) {
  const { productTitle } = await searchParams;
  const products = await getProducts();

  let choosedProduct = products.find(
    (product) => productTitle === product.logo
  );

  return choosedProduct && (
     <Product
      productInfo={choosedProduct}
      Logo={logoMap[choosedProduct!.logo]}
      animals={allAnimals}
    />
  );
}
