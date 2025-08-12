"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { manrope } from "../awp/lib/fonts";
import { kaushanScript } from "../lib/fonts";
import { motion } from "motion/react";

const links: string[] = ["/awp", "/petstars"];

export default function HeroSection() {
  return (
    <section
      className="
    group/scene relative
    bg-white "
    >
      <div className="lg:hidden px-4 pt-6 pb-10 max-w-[1024px] mx-auto">
        {/* герой: статичне фото ферми */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-[28px] overflow-hidden">
          <Image
            src="/farm.jpeg"
            alt="Ферма на заході сонця"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* заголовок + опис */}
        <div className="mt-6 text-center">
          <h1 className="font-bold text-3xl sm:text-4xl leading-tight">
            Преміальні кормові добавки для здоров’я тварин
          </h1>
          <p className="mt-3 text-base sm:text-lg leading-7 text-black/80">
            Евро Фарм — ексклюзивний представник в Україні рішень від AWP SpA та
            інших виробників. Постачаємо інноваційні кормові добавки та
            натуральні ветеринарні препарати.
          </p>
        </div>

        {/* дві великі картки-кнопки */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/awp"
            className="relative h-[120px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/chicken-awp.jpg"
              alt="AWP"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <span className={`${manrope.className} text-3xl text-white/90`}>
                AWP
              </span>
              <div className="mt-1 text-white/80 text-sm max-w-[220px]">
                20 років досліджень та інновацій на основі фітомолекул
              </div>
            </div>
            <ChevronRight
              size={28}
              color="white"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80"
            />
          </Link>

          <Link
            href="/petstars"
            className="relative h-[120px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/cat-petstars.jpg"
              alt="PetStars"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7E216A]/80 via-[#7E216A]/60 to-black/10" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <span
                className={`${kaushanScript.className} text-3xl text-white`}
              >
                PetStars
              </span>
              <div className="mt-1 text-white/90 text-sm max-w-[220px]">
                Здорове харчування для улюбленців на натуральній основі
              </div>
            </div>
            <ChevronRight
              size={28}
              color="white"
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-90"
            />
          </Link>
        </div>
      </div>

      <div className="hidden lg:block h-screen">
        <div
          className="
      pointer-events-none absolute inset-0 opacity-0
      transition-opacity duration-500
      bg-gradient-to-b from-[#999999] to-white
      group-has-[.card-awp:hover]/scene:opacity-100
    "
        />
        <div
          className="
      pointer-events-none absolute inset-0 opacity-0
      transition-opacity duration-500
      bg-gradient-to-b from-[#7E216A] to-white
      group-has-[.card-pet:hover]/scene:opacity-100
    "
        />
        {/* ВСЯ сцена */}
        <div
          className="
          relative max-w-[1440px] mx-auto h-full
          flex flex-col lg:justify-center items-center lg:pl-12
        "
        >
          {/* Верх */}
          <div className="w-full flex flex-row gap-6 justify-between items-center">
            <div className="max-w-[500px] gap-10 h-full flex flex-col justify-between my-0 p-2 text-center lg:text-left lg:self-center">
              <div className="flex flex-col flex-1 mt-15">
                <h1
                  className="
                font-bold text-4xl/[50px] tracking-wide
              "
                >
                  <span
                    className="group-has-[.card-awp:hover]/scene:hidden
                group-has-[.card-pet:hover]/scene:hidden"
                  >
                    Преміальні кормові добавки для здоров’я тварин
                  </span>
                  <span className="hidden group-has-[.card-awp:hover]/scene:inline">
                    A.W.P
                  </span>
                  <span
                    className="hidden
                group-has-[.card-pet:hover]/scene:inline
                group-has-[.card-pet:hover]/scene:text-white"
                  >
                    Pet Stars
                  </span>
                </h1>
                <p className="text-xl/[34px] tracking-wide">
                  <span
                    className="group-has-[.card-awp:hover]/scene:hidden
                group-has-[.card-pet:hover]/scene:hidden"
                  >
                    Евро Фарм — ексклюзивний представник в Україні передових
                    рішень від AWP SpA та інших виробників. Ми постачаємо
                    інноваційні кормові добавки та натуральні ветеринарні
                    препарати від провідних світових брендів
                  </span>
                  <span className="hidden group-has-[.card-awp:hover]/scene:inline">
                    Продукція A.W.P. є результатом 20 років досліджень та
                    інновацій. Продукція A.W.P. складається з відібраних та
                    очищених фітомолекул, які працюють в ідеальній синергії.
                  </span>
                  <span
                    className="hidden
                group-has-[.card-pet:hover]/scene:inline
                group-has-[.card-pet:hover]/scene:text-white"
                  >
                    Petstar пропонує здоровий та збалансований корм для домашніх
                    тварин на основі натуральних продуктів, вітамінів та
                    додаткових білків, також відповідно до дієтичних тенденцій
                    людей для покращення тривалості життя та благополуччя
                    тварин.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start">
                <Link
                  href={"/awp"}
                  className="
                    card-awp group/awp relative w-[280px] h-[70px] overflow-hidden transition-all"
                >
                  {/* затемнення */}
                  <Image
                    src={"/chicken-awp.jpg"}
                    width={640}
                    height={427}
                    alt="зображення птаха"
                    className="absolute bottom-[-60px] right-[-60px] duration-500 trantision-all z-0 w-full group-hover/awp:right-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r z-10 from-black via-40% via-black to-black/10 transition-opacity duration-1200 group-hover/awp:opacity-20" />
                  <div
                    className={`${manrope.className} antialiased absolute flex items-center left-4 top-1/2 -translate-y-1/2 text-4xl z-20 transition-opacity duration-500 text-white/70 group-hover/awp:opacity-0`}
                  >
                    <span>AWP</span>
                  </div>
                  <ChevronRight
                    color={"white"}
                    size={36}
                    className="absolute right-0 z-20 top-1/2 -translate-y-1/2 transition-opacity opacity-70 duration-500 group-hover/awp:opacity-100"
                  />
                </Link>
                <Link
                  href={"/petstars"}
                  className="
              card-pet group/pet relative w-[280px] h-[70px] overflow-hidden transition-all
            "
                >
                  <Image
                    src={"/cat-petstars.jpg"}
                    width={640}
                    height={427}
                    alt="зображення птаха"
                    className="absolute top-[-40px] right-[-50px] duration-500 trantision-all z-0 w-full group-hover/pet:right-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r z-10 from-[#7E216A] via-30% via-[#7E216A] to-black/10 transition-opacity duration-1200 group-hover/pet:opacity-20" />
                  <div
                    className={`${kaushanScript.className} antialiased absolute flex items-center left-4 top-1/2 -translate-y-1/2 text-4xl z-20 transition-opacity duration-500 text-white opacity-70 group-hover/pet:opacity-0`}
                  >
                    <span>PetStars</span>
                  </div>
                  <ChevronRight
                    color={"white"}
                    size={36}
                    className="absolute right-0 z-20 top-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-70 group-hover/pet:opacity-100"
                  />
                </Link>
              </div>
            </div>
            <div className="relative w-[740px] h-[555px] rounded-l-[120px] overflow-hidden self-end">
              {/* Default image */}
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: 550 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="
            absolute inset-0 bg-[url('/farm.jpeg')] bg-cover bg-center
            transition-opacity duration-700
            group-has-[.card-awp:hover]/scene:opacity-0
            group-has-[.card-pet:hover]/scene:opacity-0
            "
                >
                </motion.div>
                {/* AWP image */}
                <div
                  className="
            absolute inset-0 bg-[url('/AWP.jpg')] bg-cover bg-center opacity-0
            transition-opacity duration-700
            group-has-[.card-awp:hover]/scene:opacity-100
            "
                />
                {/* PetStars image */}
                <div
                  className="
            absolute inset-0 bg-[url('/PetStars.jpg')] bg-cover bg-center opacity-0
            transition-opacity duration-700
            group-has-[.card-pet:hover]/scene:opacity-100
            "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
