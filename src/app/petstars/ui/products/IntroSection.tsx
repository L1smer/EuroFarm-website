import { playfairDisplay } from "../../lib/fonts";
import Image from "next/image";

export default function IntroSection() {
  return (
    <div className="flex justify-between items-center min-h-screen pl-20 gap-25">
      <div className="flex flex-col text-text text-center flex-1 gap-7 ">
        <div className={`${playfairDisplay.className} font-extrabold flex flex-col justify-center itmes-center gap-2 `}>
          <h2 className="text-5xl border-b border-text pb-2">Концепція</h2>
          <p className="text-2xl">Наша Продукція</p>
        </div>
        <div className="flex flex-col text-sm justify-center items-center gap-5">
          <p>
            Petstars пропонує збалансоване та здорове харчування для всіх типів
            домашніх тварин – наші продукти з вітамінами, білками та оліями
            забезпечують ідеальне харчування для покращення здоров'я та
            довголіття наших улюбленців.
          </p>
          <p>
            Розробка нашої продукції пропонує можливості використання
            спеціальних сумішей олій, отриманих у ветеринарній практиці, для
            створення платформи для кращого життя у щоденному харчуванні.
          </p>
        </div>
      </div>
      <Image src='/petstars/catalog/catalog-intro.png' width={485} height={739} alt="зображення домашніх тварин" className="max-w-full h-full"/>
    </div>
  );
}
