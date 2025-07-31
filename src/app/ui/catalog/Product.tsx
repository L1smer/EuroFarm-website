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
    <div className="flex flex-col gap-10 justify-center sm:px-4 py-2 sm:py-10 lg:py-20">
      {/* Logo */}
      <div className="mb-6 lg:mb-8">{Logo}</div>

      {/* Top Section: Left + Right */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10 lg:gap-20 w-full min-h-[260px]">
        {/* Left Block */}
        <div className="flex flex-col justify-between gap-6 w-full flex-1 lg:w-1/2">
          <p className="font-light text-lg sm:text-xl md:text-2xl">
            {productInfo.mainText}
          </p>

          <div className="bg-[url('/bg-list.png')] bg-center bg-cover rounded-lg">
            <ul
              style={{ backgroundColor: productInfo.listColor }}
              className="font-bold text-base sm:text-lg md:text-xl text-white flex flex-col justify-center gap-3 p-4 rounded-lg"
            >
              {productInfo.listItems.map((item, i) => (
                <li key={i} className="flex flex-row gap-2 items-center">
                  <Check
                    size={22}
                    className="min-w-6 sm:min-w-8"
                    color="white"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-center justify-center w-full flex-1 lg:w-1/2 text-center">
          <p className="text-base sm:text-lg">{productInfo.productText}</p>
          <p className="font-extrabold text-lg sm:text-xl 2xl:text-3xl uppercase text-[#e72e4d]">
            {productInfo.availableIn.length === animals.length
              ? "всіх видів тварин"
              : productInfo.availableIn.join()}
          </p>
          <div className="flex flex-row mt-2 gap-2 items-center flex-wrap">
            {productInfo.availableImgs.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                width={40}
                height={40}
                className={`w-${img.size}`}
                alt={`animal-${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Product Image */}
      <div className="flex items-center justify-center w-full mt-6">
        <Image
          src={productInfo.img}
          width={7952}
          height={5304}
          alt="Зображення продукту"
          className="w-full max-w-4xl object-contain max-h-[500px]"
        />
      </div>

      {/* Dosage Info Table */}
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
    <div className="flex flex-col lg:flex-row w-full text-white">
      {/* Availability */}
      <div className="flex flex-col justify-center items-center bg-[#a4cf73] w-full lg:w-1/4 p-4 text-center">
        <p className="text-base sm:text-lg">Доступний у вигляді</p>
        <p className="text-lg sm:text-xl font-bold uppercase">
          {dosageInfo.availability}
        </p>
      </div>

      {/* productInfo columns */}
      <div className="flex flex-col sm:flex-row flex-grow">
        {dosageInfo.products.map((product, index) => (
          <div className="flex flex-col w-full" key={index}>
            {product.form && (
              <div className="bg-[#8ec384] flex flex-col items-center justify-center h-[80px] sm:h-[100px] text-center px-2">
                <p className="text-sm">Дозування</p>
                <p className="text-md font-extrabold">{product.form}</p>
              </div>
            )}

            {product.productInfo.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center p-4 sm:p-5 ${
                  i % 2 === 0 ? "bg-[#f0f0f0]" : "bg-[#e0e0e0]"
                } text-[#57aa43] text-center`}
              >
                <p className="font-bold text-sm">{item.species}</p>
                <p className="text-sm max-w-full">{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
