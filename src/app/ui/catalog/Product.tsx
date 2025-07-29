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
    <div className="flex flex-col gap-15 justify-center">
      <div>{Logo}</div>

      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-10 max-w-140">
          <p className="font-light text-2xl">{productInfo.mainText}</p>

          <div className="bg-[url('/bg-list.png')] bg-center bg-cover min-h-30">
            <ul
              style={{ backgroundColor: productInfo.listColor }}
              className="font-bold h-[100%] text-xl text-white flex flex-col justify-center gap-3 p-4"
            >
              {productInfo.listItems.map((item, i) => (
                <li key={i} className="flex flex-row gap-2 items-center">
                  <Check size={26} color="white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center max-w-200">
          <div className="flex flex-col">
            <p className="text-lg">{productInfo.productText}</p>
            <p className="font-extrabold text-3xl uppercase text-[#e72e4d] max-w-100">
              {productInfo.availableIn.length === animals.length ? "всіх видів тварин" : productInfo.availableIn.join()}
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
          <div>
            <Image
              src={productInfo.img}
              width={7952}
              height={5304}
              alt="Зображення продукту"
              className="max-w-100 max-h-100"
            />
          </div>
        </div>
      </div>

      <Info dosageInfo={productInfo.dosageInfo} />
    </div>
  );
}

type DosageInfo = {
  availability: string;
  products: {
    form: string;
    dosage: {
      species: string;
      value: string;
    }[];
  }[];
};

function Info({ dosageInfo }: { dosageInfo: DosageInfo }) {
  return (
    <div className="flex flex-row w-full text-white max-w-none mt-10">
      {/* Availability */}
      <div className="flex flex-col justify-center items-center bg-[#a4cf73] w-1/4 p-4 text-center">
        <p className="text-lg">Доступний у вигляді</p>
        <p className="text-xl font-bold uppercase">{dosageInfo.availability}</p>
      </div>

      {/* Dosage columns */}
      <div className="flex flex-grow">
        {dosageInfo.products.map((product, index) => (
          <div className="flex flex-col w-full" key={index}>
            {/* Header */}
            <div className="bg-[#8ec384] flex flex-col items-center justify-center h-[100px] text-center px-2">
              <p className="text-sm">Дозування</p>
              <p className="text-md font-extrabold">{product.form}</p>
            </div>

            {/* Dosage entries */}
            {product.dosage.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center p-5 ${
                  i % 2 === 0 ? "bg-[#f0f0f0]" : "bg-[#e0e0e0]"
                } text-[#57aa43] px-2 text-center`}
              >
                <p className="font-bold text-sm">{item.species}</p>
                <p className="text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
