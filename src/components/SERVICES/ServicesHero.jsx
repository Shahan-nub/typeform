import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServicesHero() {
  return (
    <div className="w-full flex flex-col items-center relative my-6 lg:my-16 mb-12 ">
      <div className="w-[95%] lg:w-[97%] overflow-hidden my-8 lg:my-auto xl:h-screen ">
        <Image
          src="/assets/servicesBG.png"
          height={1500}
          width={2000}
          alt="nig--"
          className="overflow-clip max-w-[100%] hover:scale-105 transition-all duration-[1s] rounded-lg h-auto xl:h-screen"
        ></Image>
      </div>

      <div className="absolute left-1/2 top-[70%] sm:top-[80%] lg:top-[85%] -translate-x-[50%] ">
        <div className="relative">
          <div className="absolute left-1/2 z-30 -translate-x-[50%] -translate-y-[50%] top-1/2 bg-color-1 rounded-full p-3 lg:p-6 text-white text-lg lg:text-2xl rotate-90">
            <FaArrowRightLong></FaArrowRightLong>
          </div>
          <Image
            src="/assets/rotatingText.png"
            height={200}
            width={200}
            className="h-36 w-36 animate-infinite-rotate "
          ></Image>
        </div>
      </div>
    </div>
  );
}
