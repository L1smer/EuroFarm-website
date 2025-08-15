"use client";


import HeroSection from "./ui/HeroSection";
import { playfairDisplay } from "./lib/fonts";
import { useSectionObserver } from "./lib/useSectionObserver";

export default function PetStarsHome() {
    const sectionRef = useSectionObserver()
  return (
    <>
      <HeroSection />
      <section ref={sectionRef} className="panel" data-bg="#C6BBE5">
        <h2
          className={`${playfairDisplay.className} antialiased text-[40px]`}
        >
          Що ми робимо
        </h2>
        <div className="flex max-w-[700px] gap-5">
          <p className="reveal">
            Маючи багатий досвід у сфері кормів для домашніх тварин та
            нутрицевтиків протягом останніх десятиліть, PetStars вирізняється
            своїми експертними знаннями у розробці високотехнологічних, повністю
            натуральних рецептів та продуктів.
          </p>
          <p className="reveal">
            Це означає, що ми ретельно відбираємо найкращі інгредієнти,
            гарантуючи найвищу якість без шкоди для їхньої природної структури
            та автентичності. Цей ретельний відбір є основою нашого прагнення
            забезпечити здоровий ріст та повноцінне харчування наших ласкавих
            улюбленців.
          </p>
        </div>
      </section>
    </>
  );
}
