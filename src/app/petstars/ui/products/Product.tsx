import Image from "next/image";
import { BookImage } from "lucide-react";
import { Microscope } from "lucide-react";
import { Beaker } from "lucide-react";

export default function Product({ product }: any) {
  return (
    <>
      <div className="min-h-screen text-text flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-4xl w-[600px] text-center font-extrabold border-b-2 border-text pb-2">
              {product.title}
            </h3>
            <p className="text-2xl font-extrabold text-center ">
              {product.form}
            </p>
          </div>
          <div className="flex items-stretch divide-solid divide-x-2 divide-text">
            {product.products.map((product: any, i: any) => (
              <div
                key={i}
                className="flex flex-col justify-between items-center min-h-[200px] gap-3 px-10"
              >
                <Image
                  src={product.img}
                  width={310}
                  height={571}
                  alt="зображення продукту"
                  className="max-w-[500px] mt-[-40px] mb-[-20px]"
                />
                <div className="flex flex-col justify-center gap-3 items-center">
                  <p className="font-semibold">{product.title}</p>
                  <div className="flex flex-col justify-center items-center text-secondary">
                    {product.subtitle.map((p: any, i: any) => (
                      <p key={i} className="font-semibold text-center">
                        {p}
                      </p>
                    ))}
                    <p className="text-secondary">{product.wieght}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen relative flex justify-start px-30 py-20 gap-10 flex-wrap">
        <div className="absolute bottom-0 right-0">
          <Image
            src={"/petstars/catalog/composition.png"}
            width={347}
            height={549}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start gap-5 text-secondary">
          <div className="flex items-start gap-1 text-text">
            <BookImage size={36} />
            <h5 className="text-3xl font-semibold">Основні Складові:</h5>
          </div>
          <ul className="list-disc flex flex-col gap-1 pl-4">
            {product.composition.map((item: any, i: any) => (
              <li key={i} className="text-lg max-w-120">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5 text-secondary">
          <div className="flex items-start gap-1 text-text">
            <Microscope size={36} />
            <h5 className="text-3xl font-semibold">Аналітичні складові:</h5>
          </div>
          <ul className="list-disc flex flex-col gap-1 pl-4">
            {product.analyticalConstituents.map((item: any, i: any) => (
              <li key={i} className="text-lg max-w-120">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {product.additives && (
          <div className="flex flex-col items-start gap-5 text-secondary">
            <div className="flex items-start gap-1 text-text">
              <Beaker size={36} />
              <h5 className="text-3xl font-semibold">Добавки (/кг): </h5>
            </div>
            <ul className="list-disc flex flex-col gap-1 pl-4">
              {product.additives.map((item: any, i: any) => (
                <li key={i} className="text-lg max-w-120">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-accent">(МО = міжнародна одиниця)</p>
          </div>
        )}
      </div>
    </>
  );
}
