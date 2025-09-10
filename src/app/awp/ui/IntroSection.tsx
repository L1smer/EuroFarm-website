import { sora } from "../lib/fonts";

interface IntroSectionProps {
  heading: string;
  text?: string;
  background: string;
}

export default function IntroSection({
  heading,
  background,
  text,
}: IntroSectionProps) {
  return (
    <section className="w-full pt-5 pb-10 bg-secondary rounded-b-3xl">
      <div
        style={{backgroundImage: `url(${background})`}}
        className={`relative flex justify-start items-center w-[95%] mx-auto overflow-hidden md:pl-50 h-[360px] 2xl:h-[500px] bg-center bg-cover rounded-2xl`}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="flex flex-col text-white z-10 gap-[30px] max-w-[900px] p-2 md:p-5">
          <h1
            className={`${sora.className} text-2xl sm:text-3xl md:text-4xl 2xl:text-7xl`}
          >
            {heading}
          </h1>
          {text && <p className="text-[14px] sm:text-[18px]">{text}</p>}
        </div>
      </div>
    </section>
  );
}
