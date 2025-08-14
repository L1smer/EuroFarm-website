import { sora } from "../lib/fonts";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-secondary w-full py-20 ">
      <div className="flex max-w-[1600px] justify-center items-start gap-20 min-h-screen mx-auto ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="before:mr-1 before:content-['/'] after:ml-1 after:content-['/']">
              A.W.P. Animal Wellness Products
            </span>
            <h1 className={`${sora.className} font-normal text-6xl`}>
              Про Нас
            </h1>
          </div>
          <div className="flex">
            <span
              className={`vertical-text font-extrabold self-start ${sora.className} rotate-180 text-[100px] bg-gradient-to-b ml-[-30px] from-blue-600 to-green-500`}
            >
              AWP
            </span>
            <div className="flex flex-col gap-[30px] max-w-[605px]">
              <p>
                A.W.P — визнаний світовий лідер у галузі розробки інноваційних
                фітобіотичних рішень для тваринництва з моменту заснування у
                2002 році в Італії, компанія стала синонімом науково
                обґрунтованого підходу до здоров'я тварин, об'єднавши нові
                досягнення фармацевтики із силою природи.
              </p>
              <p>
                A.W.P спеціалізується на розробці кормових добавок на основі
                очищених фітомолекул із високим ступенем фармацевтичної чистоти.
                Запатентовані методи дистиляції, кристалізації та
                нанокапсулювання забезпечують біодоступність та стабільність
                продуктів, які мають аналогів з ефективності. Наукові
                партнерства з USDA (США) та Veterinary Center of the Midwest
                підтверджують серйозність та визнання компанії на міжнародному
                рівні.
              </p>
              <p>
                Протягом багатьох років A.W.P. розширила свою присутність у
                понад 60 країнах завдяки мережі висококваліфікованих
                ветеринарів, дієтологів, дистриб'юторів та агентів.
              </p>
              <p>
                Ми експортуємо нашу продукцію в багатьох країнах: Європа, США,
                Китай, Індія, Пакистан, В'єтнам, Філіппіни, Бразилія, Колумбія,
                Аргентина, Еквадор, Білорусь, Йорданія, Саудівська Аравія,
                Ізраїль, Ліван, Єгипет, Іран, Сирія, Сенегал, Малі, Марокко та
                інші.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/awp/awp-about-us-logo.jpg"}
            width={674}
            height={720}
            alt="зображення офісу AWP"
          />
        </div>
      </div>
    </section>
  );
}
