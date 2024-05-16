import Image from "next/image";
import RotatingText from "../ui/RotatingText";

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

      <RotatingText></RotatingText>
    </div>
  );
}
