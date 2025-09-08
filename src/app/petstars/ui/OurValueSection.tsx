"use client";
import { useSectionObserver } from "../lib/useSectionObserver";
import { playfairDisplay } from "../lib/fonts";
import Image from "next/image";

export default function OurValueSection() {
  const sectionRef = useSectionObserver();
  const windowWidth = window.innerWidth;
  return (
    <section ref={sectionRef} className="panel" data-bg="#C6BBE5">
      <div className="flex flex-wrap gap-15 md:gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2
            className={`${playfairDisplay.className} antialiased text-[40px]`}
          >
            Хто ми?
          </h2>
          <div className="flex flex-col md:flex-row gap-5 text-justify">
            <p className="reveal max-w-[300px]">
              Маючи багатий досвід у сфері кормів для домашніх тварин та
              нутрицевтиків протягом останніх десятиліть, PetStars вирізняється
              своїми знаннями у розробці високотехнологічних, повністю
              натуральних рецептів та продуктів.
            </p>
            <p className="reveal max-w-[350px]">
              Це означає, що ми ретельно відбираємо найкращі інгредієнти,
              гарантуючи найвищу якість без шкоди для їхньої природної структури
              та автентичності. Цей ретельний відбір є основою нашого прагнення
              забезпечити здоровий ріст та повноцінне харчування наших ласкавих
              улюбленців.
            </p>
          </div>
        </div>
        <div
          className={`${windowWidth > 768 ? "morph-wrap" : "max-w-[500px] max-h-[300px] rounded-2xl overflow-hidden"} xl:mr-[-150px]`}
        >
          <Image
            src="/petstars/petstars-intro.jpg"
            width={778}
            height={750}
            alt="Зображення заводу"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
