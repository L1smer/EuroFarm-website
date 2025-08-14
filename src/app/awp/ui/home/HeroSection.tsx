"use client";

import ContentSlider from "../ContentSlider";
import type { Slide } from "../ContentSlider";

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
    <ContentSlider slides={demoSlides} interval={12000} className="w-[95%] rounded-2xl"/>
  );
}
