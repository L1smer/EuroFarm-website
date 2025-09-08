"use client";

import { playfairDisplay } from "../lib/fonts";
import { useSectionObserver } from "../lib/useSectionObserver";
import Image from "next/image";

const visionCardsOptions = [
  {
    text: "ПОВАГА ДО НАВКОЛИШНЬОГО СЕРЕДОВИЩА",
    img: "/petstars/petstars-icon1.png",
  },
  { text: "ЗДОРОВЕ ХАРЧУВАННЯ", img: "/petstars/petstars-icon2.png" },
  { text: "ДОМАШНЯ ТВАРИНА ЯК ЛЮДИНА", img: "/petstars/petstars-icon3.png" },
];

export default function VisionSection() {
  const sectionRef = useSectionObserver();

  return (
    <section ref={sectionRef} className="panel" data-bg="#FBDBC2">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className={`${playfairDisplay.className} antialiased text-[40px]`}>
          Бачення
        </h2>
        <p className="reveal max-w-[800px] text-center">
          Наше бачення — «Тварина як людина» та «Повага до довкілля». Це основи
          нашого фундаменту, і ми піклуємося про наших улюбленців як про членів
          сім'ї, як і про себе, пропагуючи повагу та захист довкілля,
          використовуючи лише екологічно чисті методи виробництва.
        </p>
        <p className="reveal max-w-[700px] text-center">
          Головна мета — поєднати догляд за домашніми тваринами з екологічною
          стійкістю, пропонуючи продукти, що відповідають цим принципам.
        </p>
        <div className="mt-10 flex flex-wrap gap-20 justify-center items-center">
          {visionCardsOptions.map((card, i) => (
            <div
              key={i}
              className="flex flex-col max-w-[300px] text-center justify-center items-center revealx"
            >
              <span className="uppercase font-bold">{card.text}</span>
              <Image
                src={card.img}
                width={400}
                height={400}
                alt="зображення рослини"
                className="max-w-[95px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
