"use client";

import ContentSlider from "../ContentSlider";
import type { Slide } from "../ContentSlider";
import LinkButton from "../LinkButton";

const demoSlides: Slide[] = [
  {
    id: 1,
    title: "Революція у Здоров'ї Тварин за Допомогою Природних Інновацій",
    bg: "/awp/awp-green-nature.mp4",
    isVideo: true,
  },
  {
    id: 2,
    title: "Прокладаючи Шлях до Інновацій у Сфері Природного Здоров'я Тварин",
    bg: "/awp/awp-home-slide.jpg",
  },
];

export default function HeroSection() {
  return (
    <div className="bg-secondary w-full min-h-screen py-5 rounded-2xl">
      <div className="w-[95%] mx-auto flex flex-col gap-5">
        <ContentSlider
          slides={demoSlides}
          interval={12000}
          className="w-full rounded-2xl h-[360px] xl:h-[600px]"
        />
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full ">
          <LinkButton
            href={"/awp/about"}
            background={"/awp/link-about-bg.jpg"}
            className="text-white bg-left sm:bg-center bg-cover w-full lg:w-[66%] min-h-[260px]"
            title="Очищені фітомолекули для оптимального здоров'я тварин"
            paragraph="Штаб-квартира компанії A.W.P. знаходиться в Модені, Італія, та спеціалізується на виробництві високочистих фітомолекул з рослинних екстрактів для покращення здоров'я сільськогосподарських та домашніх тварин за допомогою інноваційних програм"
          />
          <LinkButton
            href="/awp/products"
            background="/awp/link-catalog-bg.jpg"
            className="text-white w-full lg:w-[33%] h-[260px] bg-bottom bg-cover"
            title="Відкрийте для себе всі продукти A.W.P."
          />
        </div>
      </div>
    </div>
  );
}
