import Image from "next/image";
import { Check } from "lucide-react";
import type { productInfoProps } from "@/app/ui/catalog/ProductList";
import { JSX } from "react";
import { libertinusMath } from "@/app/lib/fonts";

export default function Product({
  productInfo,
  Logo,
  animals,
}: {
  productInfo: any;
  Logo: JSX.Element;
  animals: string[];
}) {
  return (
    <div className="container mx-auto overflow-x-hidden px-4 py-8 md:py-16 flex flex-col">
      {/* Logo */}
      <div className="flex justify-center mb-10">{Logo}</div>

      {/* Highlight Section */}
      <div className="overflow-hidden bg-[url('/bg-list.png')] bg-cover border border-[#a4cf73] rounded-xl shadow-md backdrop-blur-sm">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, ${productInfo.highlightTextColor}, transparent)`,
          }}
          className="text-white flex justify-center items-center text-center font-normal w-full h-full p-4 text-2xl sm:text-3xl lg:text-4xl"
        >
          <p className={`${libertinusMath.className} antialiased`}>
            {productInfo.highlightText}
          </p>
        </div>
      </div>

      {/* Main Text if no infoSection */}

      {!productInfo.infoSection && (
        <p className="text-lg sm:text-xl md:text-2xl text-center font-light mt-6">
          {productInfo.mainText}
        </p>
      )}

      {/* Info Section */}
      <div
        className={`flex flex-col py-8 ${
          !productInfo.infoSection &&
          "lg:flex-row justify-center items-center mt-0"
        } w-full`}
      >
        {/* Left Side */}
        <div className="flex flex-col items-center text-center gap-8 w-full ">
          <div>
            <p className="text-base sm:text-lg">{productInfo.productText}</p>
            <p className="font-extrabold text-lg sm:text-xl md:text-2xl 2xl:text-3xl uppercase text-[#e72e4d]">
              {productInfo.availableIn.length === animals.length
                ? "всіх видів тварин"
                : productInfo.availableIn.join()}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-1">
              {productInfo.availableImgs.map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  width={80}
                  height={80}
                  className="w-14 h-14 object-contain"
                  alt={`animal-${i}`}
                />
              ))}
            </div>
          </div>
          {!productInfo.infoSection && (
            <div className="bg-[url('/bg-list.png')] bg-center bg-cover rounded-lg">
              <ul
                style={{ backgroundColor: productInfo.listColor }}
                className="font-bold text-base sm:text-lg md:text-xl text-white flex flex-col items-start gap-3 p-4 rounded-lg"
              >
                {productInfo.listItems.map((item, i) => (
                  <li key={i} className="flex flex-row gap-2 items-center">
                    <Check
                      size={22}
                      className="min-w-6 sm:min-w-8"
                      color="white"
                    />
                    <span className="block text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center w-full">
          <Image
            src={productInfo.img}
            width={800}
            height={500}
            alt="Зображення продукту"
            className="w-full max-w-[600px] object-contain max-h-[300px] md:max-h-[400px]"
          />
        </div>
      </div>

      {/* Conditional Info Section */}
      {productInfo.infoSection ? (
        <ProductInfoSection
          productInfo={productInfo.infoSection}
          children={<Info dosageInfo={productInfo.dosageInfo} />}
        />
      ) : (
        <Info dosageInfo={productInfo.dosageInfo} />
      )}
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
  // знаходимо максимальну кількість рядків у всіх колонках
  const maxRows = Math.max(
    ...dosageInfo.products.map((p) => p.productInfo.length)
  );

  return (
    <div className="flex flex-col lg:flex-row w-full text-white overflow-hidden">
      {/* Ліва частина — назва форм */}
      <div className="flex flex-col justify-center items-center bg-[#a4cf73] w-full lg:w-1/4 p-4 text-center">
        <p className="text-base sm:text-lg">Доступний у вигляді</p>
        <p className="text-lg sm:text-xl font-bold uppercase">
          {dosageInfo.availability}
        </p>
      </div>

      {/* Права частина — таблиця дозування */}
      <div className="flex flex-col lg:flex-row flex-grow w-full">
        {dosageInfo.products.map((product, index) => (
          <div className="flex flex-col w-full" key={index}>
            {/* Заголовок */}
            {product.form && (
              <div className="bg-[#8ec384] flex flex-col items-center justify-center h-[80px] sm:h-[100px] text-center px-2">
                <p className="text-sm">Дозування</p>
                <p className="text-md font-extrabold">{product.form}</p>
              </div>
            )}

            {/* Рядки таблиці */}
            {Array.from({ length: maxRows }).map((_, i) => {
              const item = product.productInfo[i];
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center p-4 sm:p-5 min-h-[100px] ${
                    i % 2 === 0 ? "bg-[#f0f0f0]" : "bg-[#e0e0e0]"
                  } text-[#57aa43] text-center`}
                >
                  {item ? (
                    <>
                      <p className="font-bold text-sm">{item.species}</p>
                      <p className="text-sm max-w-full break-words whitespace-normal">
                        {item.value}
                      </p>
                    </>
                  ) : (
                    <div className="h-[1em]">&nbsp;</div> // Порожній блок
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductInfoSection({
  productInfo,
  children,
}: {
  productInfo: any;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-[url('/bg-list.png')] bg-cover text-white shadow-lg">
      <div
        style={{ backgroundColor: productInfo.bgColor }}
        className="flex flex-col lg:flex-row gap-8 p-4 md:p-8"
      >
        <div className="flex flex-col justify-between gap-6 w-full lg:w-1/2">
          <p className="font-medium text-lg sm:text-xl md:text-2xl">
            {productInfo.mainText}
          </p>
          <ul className="font-bold text-base sm:text-xl md:text-2xl text-white flex flex-col justify-center gap-3 p-4 rounded-lg">
            {productInfo.listItems.map((item, i) => (
              <li key={i} className="flex flex-row gap-2 items-center">
                <Check size={30} className="min-w-6 sm:min-w-8" color="white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-2 bg-white text-[#2c2c2c] p-6 rounded-xl shadow-md">
          <p className="text-base md:text-lg text-center font-semibold">
            {productInfo.containsText}
          </p>
          {productInfo.productListInfo.listComposition?.length > 0 && (
            <div>
              <h3
                style={{ color: productInfo.bgColor }}
                className="text-lg border-t border-black pt-3 md:text-xl font-bold mb-4 text-center"
              >
                {productInfo.productListInfo.headingOfList}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm md:text-base break-words">
                {productInfo.productListInfo.listComposition.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 items-start w-full max-w-full sm:max-w-sm"
                  >
                    <span className="font-semibold text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
