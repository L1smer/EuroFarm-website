import Image from "next/image";
import { Check } from "lucide-react";
import type { productInfoProps } from "@/app/catalog/page";
import { JSX } from "react";

export default function Product({
  productInfo,
  Logo,
  animals,
}: {
  productInfo: productInfoProps;
  Logo: JSX.Element;
  animals: string[];
}) {
  return (
    <div className="flex flex-col gap-10 justify-center min-h-screen px-4">
      <div className="mb-8">{Logo}</div>

      <div className="flex flex-row justify-between items-stretch gap-20 w-full min-h-[320px]">
        <div className="flex flex-col gap-10 max-w-140 h-full justify-between">
          <p className="font-light text-2xl">{productInfo.mainText}</p>

          <div className="bg-[url('/bg-list.png')] bg-center bg-cover min-h-30">
            <ul
              style={{ backgroundColor: productInfo.listColor }}
              className="font-bold min-h-30 text-xl text-white flex flex-col justify-center gap-3 p-4 min-w-[560px]"
            >
              {productInfo.listItems.map((item, i) => (
                <li key={i} className="flex flex-row gap-2 items-center">
                  <Check size={26} className="min-w-10" color="white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-around items-stretch w-full h-full gap-4">
          <div className="flex flex-col justify-start items-start h-full">
            <p className="text-lg">{productInfo.productText}</p>
            <p className="font-extrabold text-3xl uppercase text-[#e72e4d] max-w-100">
              {productInfo.availableIn.length === animals.length
                ? "всіх видів тварин"
                : productInfo.availableIn.join()}
            </p>
            <div className="flex flex-row mt-3 gap-2 max-w-60 items-center flex-wrap">
              {productInfo.availableImgs.map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  width={50}
                  height={50}
                  className={`w-${img.size}`}
                  alt={`animal-${i}`}
                />
              ))}
            </div>
          </div>

          {/* Изображение продукта */}
          <div className="flex items-center justify-center max-w-90 max-h-90 h-full">
            <Image
              src={productInfo.img}
              width={7952}
              height={5304}
              alt="Зображення продукту"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      <Info dosageInfo={productInfo.dosageInfo} />
    </div>
  );
}

type dosageInfo = {
  availability: string;
  products: {
    form?: string;
    productInfo: {
      species: string;
      value: string;
    }[];
  }[];
};

function Info({ dosageInfo }: { dosageInfo: dosageInfo }) {
  return (
    <div className="flex flex-row w-full text-white max-w-none">
      {/* Availability */}
      <div className="flex flex-col justify-center items-center bg-[#a4cf73] w-1/4 p-4 text-center">
        <p className="text-lg">Доступний у вигляді</p>
        <p className="text-xl font-bold uppercase">{dosageInfo.availability}</p>
      </div>

      {/* productInfo columns */}
      <div className="flex flex-grow">
        {dosageInfo.products.map((product, index) => (
          <div className="flex flex-col w-full" key={index}>
            {product.form ? (
              <div className="bg-[#8ec384] flex flex-col items-center justify-center h-[100px] text-center px-2">
                <p className="text-sm">Дозування</p>
                <p className="text-md font-extrabold">{product.form}</p>
              </div>
            ) : (
              ""
            )}

            {/* productInfo entries */}
            {product.productInfo.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center p-5 ${
                  i % 2 === 0 ? "bg-[#f0f0f0]" : "bg-[#e0e0e0]"
                } text-[#57aa43] px-2 text-center`}
              >
                <p className="font-bold text-sm">{item.species}</p>
                <p className="text-sm max-w-120">{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
