'use client';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Product from "../ui/catalog/Product";
import { JSX } from "react";

export type productInfoProps = {
  productElement: JSX.Element;
  mainText: string;
  listItems: string[];
  listColor: string;
  availableImgs: {
    src: string;
    size: number;
  }[];
  img: string;
  availableIn: string;
  productText: string;
  tableTitle: string;
  tableP: string;
  dosageInfo: {
    availability: string;
    products: {
      form: string;
      dosage: {
        species: string;
        value: string;
      }[];
    }[];
  };
};

export default function Catalog() {
  const productsInfo: productInfoProps[] = [
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">
          Mix
          <span className="border-green-500 w-25 h-25 border-[10px] rounded-full ml-2" />
          il
        </p>
      ),
      mainText:
        "MixOil - cтимулятор росту на рослинній основі, який містить синергетичну комбінацію фітомолекул",
      listItems: [
        "Покращує продуктивність та фертильність",
        "Підтримує здоров’я кишечника",
        "Сприяє адекватній імунній відповіді",
      ],
      listColor: "rgba(148, 255, 77, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 11 },
        { src: "/animals-imgs/pig.png", size: 12 },
        { src: "/animals-imgs/bull.png", size: 11 },
        { src: "/animals-imgs/cow.png", size: 11 },
        { src: "/animals-imgs/sheep.png", size: 11 },
      ],
      img: "/mixoil.png",
      availableIn: "птахи, свині, жуйні тварини",
      productText: "Доступно для такої категорії тварин:",
      tableTitle: "Дозування",
      tableP: "MixOil порошок",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [
              {
                species: "Усі види",
                value: "200-1000г/тонна корму",
              },
            ],
          },
          {
            form: "Рідина",
            dosage: [
              {
                species: "Усі види",
                value: "100-1000 мл/тонна питної води або корму",
              },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">
          Mix
          <span className="border-green-500 w-25 h-25 border-[10px] rounded-full ml-2" />
          il
          <p className="flex self-start ml-2 text-4xl font-extrabold">++</p>
        </p>
      ),
      mainText:
        "MixOil++ це cтимулятор росту на рослинній основі, який містить синергетичну комбінацію фітомолекул, органічних кислот та похідних коротко-середньоланцюгових жирних кислот",
      listItems: [
        "Покращує ріст та продуктивність",
        "Підтримує здоров’я кишечника",
        "Сприяє адекватній імунній відповіді",
      ],
      listColor: "rgba(255, 221, 0, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 11 },
        { src: "/animals-imgs/pig.png", size: 12 },
        { src: "/animals-imgs/bull.png", size: 11 },
        { src: "/animals-imgs/cow.png", size: 11 },
        { src: "/animals-imgs/sheep.png", size: 11 },
      ],
      img: "/mixoil.png",
      availableIn: "птахи, свині, жуйні тварини",
      productText: "Доступно для такої категорії тварин:",
      tableTitle: "Дозування",
      tableP: "MixOil порошок",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [
              {
                species: "Птахи",
                value: "100-300 г/тонну корму",
              },
              {
                species: "Свині",
                value: "150-800 г/тонна корму",
              },
              {
                species: "Жуйні тварини",
                value: "2-5г/голову/день",
              },
            ],
          },
          {
            form: "Рідина",
            dosage: [
              {
                species: "Птахи та свині",
                value: "100-800 мл/тонна питної води",
              },
              {
                species: "Молочні корови та велика рогата худоба",
                value: "1-5 мл/день",
              },
              {
                species: "Телята",
                value: "1-3 мл у молоці/день",
              },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">
          Mix
          <span className="border-green-500 w-25 h-25 border-[10px] rounded-full ml-2" />
          il
          <p className="flex flex-col self-start ml-2 text-4xl font-extrabold">
            <p>++</p>
            <p className="text-blue-400">Aqua</p>
          </p>
        </p>
      ),
      mainText:
        "MixOil++ Aqua це Стимулятор росту на рослинній основі,який Містить синергетичну комбінацію фітомолекул, органічних кислот та похідних коротко-середньоланцюгових жирних кислот",
      listItems: [
        "Має антиоксидантну та протизапальну дію",
        "Підтримує імунну систему та знижує смертність",
        "Зменшує викиди аміаку у воду",
      ],
      listColor: "rgba(0, 115, 255, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/fish.png", size: 12 },
        { src: "/animals-imgs/shrimp.png", size: 12 },
      ],
      img: "/mixoil.png",
      availableIn: "риба та креветки",
      productText: "Доступно для такої категорії тварин:",
      tableTitle: "Дозування",
      tableP: "MixOil порошок",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [
              {
                species: "Весь період вирощування",
                value: " 200-500г/тонну корму",
              },
              {
                species: "Іспити",
                value: "500-800 г/тонна корму",
              },
            ],
          },
          {
            form: "Рідина",
            dosage: [
              {
                species: "Весь період вирощування",
                value: "100-400 мл/тонна корму",
              },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">AirOil</p>
      ),
      mainText:
        "AirOil містить синергетичну комбінацію фітомолекул, що підтримують здоров’я верхніх і нижніх дихальних шляхів.",
      listItems: [
        "Максимізує імунну відповідь",
        "Сприяє муколітичній та відхаркувальній дії",
        "Підходить при захворюваннях дихальних шляхів",
      ],
      listColor: "rgba(173, 216, 230, 0.3)", // светло-блакитний
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 12 },
        { src: "/animals-imgs/pig.png", size: 13 },
        { src: "/animals-imgs/cow.png", size: 12 },
      ],
      img: "/airoil.png",
      availableIn: "птиця, свині, жуйні тварини",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [
              { species: "Птиця", value: "150–500 г/т корму" },
              { species: "Свині", value: "150–500 г/т корму" },
              { species: "Жуйні тварини", value: "2–5 г/гол./день" },
            ],
          },
          {
            form: "Рідина",
            dosage: [
              {
                species: "Птиця та свині",
                value: "300–700 мл/т питної води (3–5 днів)",
              },
              { species: "Жуйні тварини", value: "1–5 мл/гол./день" },
              { species: "Небуалізація", value: "30 мл/л щотижня" },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">CoxxOil</p>
      ),
      mainText:
        "CoxxOil містить комбінацію фітомолекул, що переривають життєвий цикл кокцидій завдяки синергії дії.",
      listItems: [
        "Підтримує продуктивність при кокцидіозі",
        "Стимулює травні ферменти",
        "Підвищує цілісність кишкового бар’єру",
        "Підсилює імунну відповідь",
      ],
      listColor: "rgba(255, 192, 203, 0.3)", // рожевий
      availableImgs: [{ src: "/animals-imgs/chicken.png", size: 12 }],
      img: "/coxxoil.png",
      availableIn: "птиця",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [{ species: "Птиця", value: "100–800 г/т корму" }],
          },
          {
            form: "Рідина",
            dosage: [{ species: "Птиця", value: "100–500 мл/т питної води" }],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">ImmunOil</p>
      ),
      mainText:
        "ImmunOil містить синергетичну комбінацію фітомолекул, що підтримують імунну систему.",
      listItems: [
        "Модуляція імунної відповіді",
        "Стимулює розвиток імунної системи",
        "Впливає на слизову оболонку кишечника",
      ],
      listColor: "rgba(255, 99, 132, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 12 },
        { src: "/animals-imgs/pig.png", size: 12 },
      ],
      img: "/immunoil.png",
      availableIn: "птиця, свині",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "лише в рідині",
        products: [
          {
            form: "Рідина",
            dosage: [
              { species: "Птиця та свині", value: "300–700 мл/т питної води" },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">4PowerX</p>
      ),
      mainText:
        "4PowerX містить комбінацію фітомолекул, що посилюють дію антибіотиків.",
      listItems: [
        "Робить бактерії чутливішими до антибіотиків",
        "Інгібує утворення біоплівки",
        "Підсилює антибіотичну дію",
        "Можливе використання разом з антибіотиками",
      ],
      listColor: "rgba(144, 238, 144, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 12 },
        { src: "/animals-imgs/pig.png", size: 12 },
        { src: "/animals-imgs/bull.png", size: 12 },
        { src: "/animals-imgs/fish.png", size: 12 },
      ],
      img: "/4powerx.png",
      availableIn: "птиця, свині, жуйні, аквакультура",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [
              {
                species: "Птиця, свині, аквакультура",
                value: "300–700 г/т корму",
              },
              { species: "Жуйні тварини", value: "3–10 г/гол./день" },
            ],
          },
          {
            form: "Рідина",
            dosage: [
              {
                species: "Птиця, свині, аквакультура",
                value: "300–700 мл/т води або корму",
              },
              { species: "Жуйні тварини", value: "3–10 мл/гол./день" },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">WLF</p>
      ),
      mainText:
        "WLF містить формиат кальцію, лимонну кислоту та фітомолекули в жировій матриці зі «stop & go» вивільненням.",
      listItems: [
        "Забезпечує формиат у недисоційованій формі",
        "Має сильну активність проти патогенних бактерій",
        "Стимулює імунну відповідь",
      ],
      listColor: "rgba(255, 204, 153, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 12 },
        { src: "/animals-imgs/pig.png", size: 12 },
      ],
      img: "/wlf.png",
      availableIn: "птиця, свині",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "лише у порошку",
        products: [
          {
            form: "Порошок",
            dosage: [
              { species: "Птиця", value: "1–5 кг/т корму" },
              { species: "Свині", value: "1–7 кг/т корму" },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">ToxinFibre</p>
      ),
      mainText:
        "ToxinFibre містить поліфеноли з низькою молекулярною масою та фітомолекули для зв'язування токсинів у кишечнику.",
      listItems: [
        "Зв'язує ендо- та екзотоксини",
        "Не порушує засвоєння поживних речовин",
        "Підтримує здоров'я кишечника",
        "Допомагає отримувати безпечніший корм",
      ],
      listColor: "rgba(153, 204, 255, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 12 },
        { src: "/animals-imgs/pig.png", size: 13 },
        { src: "/animals-imgs/fish.png", size: 13 },
        { src: "/animals-imgs/sheep.png", size: 12 },
        { src: "/animals-imgs/hourse.png", size: 12 },
        { src: "/animals-imgs/cow.png", size: 12 },
        { src: "/animals-imgs/bull.png", size: 12 },
      ],
      img: "/toxinfiber.png",
      availableIn: "птахи , свині, жуйні тварини, аквакультура",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "лише у порошку",
        products: [
          {
            form: "Порошок",
            dosage: [
              { species: "Як консервант", value: "700 г/т" },
              {
                species: "Птиця, свині, аквакультура",
                value: "200–1000 г/т корму",
              },
              { species: "Жуйні тварини", value: "5–60 г/гол./день" },
            ],
          },
        ],
      },
    },
    {
      productElement: (
        <p className="text-8xl font-normal flex items-center">PreNat</p>
      ),
      mainText:
        "PreNat — це суміш антиоксидантів (поліфеноли, каротиноїди, токофероли) для захисту від окислення.",
      listItems: [
        "Знижує вміст вільних радикалів (ROS)",
        "Має первинну і вторинну антиоксидантну дію",
        "Захищає від окиснення жирів",
      ],
      listColor: "rgba(255, 255, 153, 0.3)",
      availableImgs: [
        { src: "/animals-imgs/chicken.png", size: 12 },
        { src: "/animals-imgs/pig.png", size: 13 },
        { src: "/animals-imgs/fish.png", size: 13 },
        { src: "/animals-imgs/sheep.png", size: 12 },
        { src: "/animals-imgs/hourse.png", size: 12 },
        { src: "/animals-imgs/shrimp.png", size: 13 },
        { src: "/animals-imgs/cow.png", size: 12 },
        { src: "/animals-imgs/bull.png", size: 12 },
      ],
      img: "/prenat.png",
      availableIn: "всі види тварин",
      productText: "Доступно для таких тварин:",
      tableTitle: "Дозування",
      tableP: "",
      dosageInfo: {
        availability: "порошку та рідини",
        products: [
          {
            form: "Порошок",
            dosage: [
              { species: "Як консервант у кормі", value: "400–700 ppm" },
              { species: "Як консервант у риб’ячому жирі", value: "2 кг/т" },
            ],
          },
        ],
      },
    },
    
  ];

  return (
    <>
      {productsInfo.map((product, i) => (
        <Product key={i} productInfo={product} />
      ))}
    </>
  );
}
