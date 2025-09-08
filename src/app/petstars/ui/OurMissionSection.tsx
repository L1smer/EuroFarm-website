"use client";

import { playfairDisplay } from "../lib/fonts";
import { useSectionObserver } from "../lib/useSectionObserver";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function OurMissionSection() {
  const sectionRef = useSectionObserver();
  const localSectionRef = useRef<HTMLElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  return (
    <section
      ref={(node) => {
        sectionRef(node);
        localSectionRef.current = node;
      }}
      className="panel relative"
      data-bg={
        windowWidth > 768 ? "#B2E2B8" : "url(/petstars/petstars-mission-2.jpg)"
      }
    >
      
      <div className="relative flex flex-wrap flex-row-reverse gap-20 h-full justify-center items-center z-2">
        <div className="flex flex-col justify-start items-center h-175 py-10 max-w-150 gap-5 font-semibold">
          <h2
            className={`${playfairDisplay.className} antialiased text-[40px]`}
          >
            Наша місія
          </h2>
          <div className="flex flex-col gap-5 text-justify w-ful">
            <div className="reveal flex items-center justify-center md:justify-between">
              <p className="max-w-[400px]">
                Наша місія полягає в розробці передових кормів для домашніх
                тварин, які поєднують здоров'я, сталий розвиток,
                функціональність та інновації. Ми прагнемо створювати рішення,
                які значно покращують якість їжі для наших чотирилапих друзів,
                водночас повністю поважаючи навколишнє середовище.
              </p>
              <Image
                src={"/petstars/petstars-mission-food.png"}
                width={149}
                height={148}
                alt="зображення їжі для домашніх тварин"
                className="max-w-[160px] hidden md:block"
              />
            </div>
            <div className="reveal flex flex-row-reverse items-center justify-center md:justify-between">
              <p className="max-w-[400px]">
                Це означає не лише забезпечення того, щоб наші продукти були
                здоровими та поживними для тварин, які їх споживають, але й
                впровадження сталих практик, які захищають нашу планету та
                природні ресурси для майбутніх поколінь. Ми постійно шукаємо
                нові, інноваційні підходи для задоволення потреб тварин у
                харчуванні та сприяння їхньому благополуччю без шкоди для
                екологічного балансу.
              </p>
              <Image
                src={"/petstars/petstars-mission-food2.png"}
                width={167}
                height={162}
                alt="зображення їжі для домашніх тварин"
                className="max-w-[160px] hidden md:block"
              />
            </div>
            <Image
              src={"/petstars/petstars-mission.png"}
              width={600}
              height={208}
              alt="зображення їжі для домашніх тварин"
              className="revealx max-w-[600px] w-full mx-auto"
            />
          </div>
        </div>
        <div className="hidden 2xl:block">
          <Image
            src="/petstars/petstars-mission-2.jpg"
            width={693}
            height={750}
            alt="Зображення заводу"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
