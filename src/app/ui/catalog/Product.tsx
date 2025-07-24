import Image from "next/image";
import { Check } from "lucide-react";

export default function Product() {
  return (
    <div className="flex flex-col justify-center gap-30 max-w-[1400px] my-50 mx-auto">
      <div>
        <p className="text-8xl font-normal flex items-center">
          Mix
          <span className="border-green-500 w-25 h-25 border-[10px] rounded-[50%]" />
          il
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-10 max-w-140">
          <div>
            <p className="font-light text-2xl">
              MixOil - cтимулятор росту на рослинній основі,який містить
              синергетичну комбінацію фітомолекул
            </p>
          </div>
          <div className="bg-[url('/bg-list.jpeg')] bg-center bg-cover h-30">
            <ul className="bg-green-700/40 font-bold h-[100%] text-xl text-white flex flex-col justify-center gap-3">
              <li className="flex flex-row gap-2 items-center">
                <Check size={26} color="white" />
                <span>Покращує продуктивність та фертильність</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Check size={26} color="white" />
                <span>Підтримує здоров’я кишечника</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Check size={26} color="white" />
                Сприяє адекватній імунній відповіді
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-140">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-col max-w-80">
              <p className="text-lg">Доступно для такої категорії тварин:</p>
              <p className="font-extrabold text-3xl uppercase text-[#e72e4d]">
                птахи, свині, жуйні тварини
              </p>
              <div className="flex flex-row mt-3 gap-2 items-center flex-wrap">
                <Image
                  src="/animals-imgs/chicken.png"
                  width={70}
                  height={70}
                  className="w-10"
                />
                <Image
                  src="/animals-imgs/pig.png"
                  width={70}
                  height={70}
                  className="w-11"
                />
                <Image
                  src="/animals-imgs/bull.png"
                  width={70}
                  height={70}
                  className="w-10"
                />
                <Image
                  src="/animals-imgs/cow.png"
                  width={70}
                  height={70}
                  className="w-10.5"
                />
                <Image
                  src="/animals-imgs/sheep.png"
                  width={70}
                  height={70}
                  className="w-10"
                />
              </div>
            </div>
            <div className="w-50">
              <Image
                src="/mixoil.png"
                width={362}
                height={349}
                alt="Зображення міксоіл"
              />
            </div>
          </div>
        </div>
      </div>
      <Info />
    </div>
  );
}

function Info() {
  return (
    <>
      <div className="flex flex-row bg-[#9acd76] h-60 max-w-none rounded-full overflow-hidden text-white">
        <div className="flex flex-col justify-center min-w-70 items-center">
          <div className="flex flex-row items-center">
            <Image src="/powder.png" width={119} height={89} className="w-10 h-8" />
            <Image src="/liquid.png" width={92} height={104} className="w-8 h-8"/>
          </div>
          <p>Доступний у вигляді</p>
          <p
            className="font-bold
             uppercase"
          >
            порошку та рідини
          </p>
        </div>
        <div className="flex flex-col justify-center bg-[#8ec384] items-center min-w-70 w-full">
            <div className="flex flex-col items-center h-[50%]">
                <p className="text-lg">Дозування</p>
                <p className="text-xl font-extrabold">MixOil порошок</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-extrabold text-xl">Усі види</p>
                <p className="text-lg">200-1000г/тонна корму</p>
            </div>
        </div>
      </div>
    </>
  );
}
