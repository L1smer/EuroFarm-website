import Image from "next/image";
import { Check } from "lucide-react";
import type { productInfoProps } from "@/app/catalog/page";

export default function Product({
  productInfo,
}: {
  productInfo: productInfoProps;
}) {
  return (
    <div className="flex flex-col justify-center gap-20 max-w-[1400px] my-50 mx-auto">
      <div>{productInfo.productElement}</div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-10 max-w-140">
          <p className="font-light text-2xl">{productInfo.mainText}</p>

          <div className="bg-[url('/bg-list.jpeg')] bg-center bg-cover min-h-30">
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

        <div className="flex flex-col w-140">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-col max-w-80">
              <p className="text-lg">{productInfo.productText}</p>
              <p className="font-extrabold text-3xl uppercase text-[#e72e4d]">
                {productInfo.availableIn}
              </p>
              <div className="flex flex-row mt-3 gap-2 items-center flex-wrap">
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
            <div className="w-50">
              <Image
                src={productInfo.img}
                width={362}
                height={349}
                alt="Зображення продукту"
                className="min-h-50 w-70"
              />
            </div>
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
