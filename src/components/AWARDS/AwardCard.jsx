import { LiaAwardSolid } from "react-icons/lia";

export default function AwardCard({num,award,date,org}) {
  return (
    <div className="w-[95%] lg:w-[85%] text-start flex items-center justify-between py-5 lg:py-8 text-gray-300 text-xs md:text-lg xl:text-2xl hover:bg-glass hover:scale-105 border-y border-glass transition-all duration-700 px-6 lg:px-12 rounded-sm">

      <div className="flex basis-[25%] items-center gap-4 lg:gap-8">
        <p className="text-xs font-light xl:text-base">{num}.</p>
        <p className="text-white font-medium lg:font-semibold">{award}</p>
      </div>

      <div className="flex gap-2 lg:gap-4 pl-5 lg:pl-24 xl:pl-32 self-center basis-[50%] flex-col">
        <h3 className="font-light text-[10px] md:text-xs xl:text-lg">{date}</h3>
        <h2 className="text-white font-medium lg:font-semibold">{org}</h2>
      </div>

      <LiaAwardSolid className="text-5xl lg:text-7xl basis-[15%] "></LiaAwardSolid>
    </div>
  );
}
