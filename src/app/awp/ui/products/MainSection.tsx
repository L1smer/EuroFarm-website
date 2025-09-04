import { sora } from "../../lib/fonts";

export default function MainSection() {
  return (
    <section className="w-full pt-5 pb-10 bg-secondary rounded-b-3xl">
      <div className="relative flex justify-start items-center w-[95%] mx-auto overflow-hidden bg-[url(/awp/awp-animals-catalog.jpg)] md:p-20 h-[360px] 2xl:h-[500px] bg-center bg-cover rounded-2xl">
        <div className="absolute inset-0 bg-black/20"/>
        <div className="flex flex-col text-white z-10 gap-[30px] max-w-[800px] p-2 md:p-5">
          <h1 className={`${sora.className} text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl`}>
            Продукти для всіх сільськогосподарських тварин
          </h1>
          <p className="text-[14px] sm:text-[18px]">
            Євро-Фарм — надійний постачальник високоякісної європейської
            продукції для тваринництва, який забезпечує фермерів по всій Україні
            сучасними рішеннями для догляду та годівлі сільськогосподарських
            тварин.
          </p>
        </div>
      </div>
    </section>
  );
}
