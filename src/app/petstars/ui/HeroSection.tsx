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
      id="heroSection"
    >
      <div className="relative flex flex-col gap-10 justify-center z-20 h-full items-center">
        <Image
          src={"/petstars/petstars-logo.png"}
          width={1159}
          height={400}
          alt="Логотип PetStars"
          className="max-w-[320px] md:max-w-[472px] max-h-[160px]"
        />
      </div>
      <div className="mb-10 animate-bounce z-20">
        <ArrowDown color="white" className="" size={60} />
      </div>
    </section>
  );
}
