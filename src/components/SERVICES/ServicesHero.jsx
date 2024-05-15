import Image from "next/image";

export default function ServicesHero() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] lg:w-[97%] overflow-hidden h-screen">
        <Image
          src="/assets/servicesBG.png"
          height={1500}
          width={2000}
          alt="nig--"
          className="overflow-clip max-w-[100%] hover:scale-105 transition-all duration-[1s] rounded-lg h-auto lg:h-screen"
        ></Image>
      </div>
      
    </div>
  );
}
