"use client"
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useSectionObserver } from "../lib/useSectionObserver";

export default function HeroSection() {
    const sectionRef = useSectionObserver()
    return (
    <section
      ref={sectionRef}
      data-bg="url('/petstars/petstars-hero-bg.jpg')"
      className="relative h-screen flex flex-col w-full justify-center items-center"
    >
      <div className="relative flex flex-col gap-10 justify-center z-20 h-full items-center">
        <Image
          src={"/petstars/petstars-logo.png"}
          width={1159}
          height={400}
          alt="Логотип PetStars"
          className="w-[472px] h-[160px]"
          priority
        />
        <div className="flex flex-col justify-center font-medium items-center text-center text-white gap-5 text-xl max-w-[900px]">
          <p>
            Petstars пропонує збалансоване та здорове харчування для всіх типів
            домашніх тварин – наші продукти з вітамінами, білками та оліями
            забезпечують ідеальне харчування для покращення здоров'я та
            довголіття наших улюбленців.
          </p>
          <p>
            Розробка PetStars продуктів пропонує можливості використання
            спеціальних сумішей олій, отриманих у ветеринарній практиці, для
            створення платформи для кращого життя в щоденній практиці
            харчування.
          </p>
        </div>
      </div>
      <div className="mb-10 animate-bounce z-20">
        <ArrowDown color="white" className="" size={60} />
      </div>
    </section>
  );
}
