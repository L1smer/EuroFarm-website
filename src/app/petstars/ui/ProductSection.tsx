"use client";

import Link from "next/link";
import Image from "next/image";
import { useSectionObserver } from "../lib/useSectionObserver";
import { playfairDisplay } from "../lib/fonts";

export default function ProductSection() {
  const sectionRef = useSectionObserver();

  return (
    <section className="panel" ref={sectionRef} data-bg="#F5F5DC">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col items-center gap-8 md:gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2
              className={`${playfairDisplay.className} text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl`}
            >
              Продукція PetStars
            </h2>
            <div className="reveal">
              <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                Ми створюємо корми та смаколики з натуральних інгредієнтів і
                збалансованих формул, щоб ваш улюбленець був активним, здоровим
                і щасливим. Якість, яку відчувають тварини — з першої порції.
              </p>

              <Link
                href="/petstars/products"
                aria-label="Перейти до продукції PetStars"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-text px-5 py-3 font-semibold text-white shadow-md hover:bg-primary hover:text-text transition-all duration-250"
              >
                Перейти до продукції
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <Image
              src="/petstars/dog.png"
              width={564}
              height={846}
              alt="Щасливий собака — PetStars"
              priority={false}
              sizes="(max-width: 1024px) 80vw, 564px"
              className="revealx h-auto w-[min(420px,80vw)] md:w-[420px] lg:w-[520px] xl:w-[564px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
