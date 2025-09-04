export default function MixOilPlusAqua() {
  return (
    <p className="text-6xl sm:text-8xl font-normal flex items-center">
      Mix
      <span className="border-green-500 w-20 h-20 sm:w-30 sm:h-30 border-[4px] sm:border-[7px] rounded-full sm:ml-2" />
      il
      <span className="flex flex-col justify-between h-full ml-2 text-3xl sm:text-4xl font-extrabold">
        <span>++</span>
        <span className="text-blue-400">Aqua</span>
      </span>
    </p>
  );
}
