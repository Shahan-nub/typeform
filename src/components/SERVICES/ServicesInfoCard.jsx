import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

export default function ServicesInfoCard({title,src,alt}) {
  return (
    <div className="flex group justify-between items-center relative w-full px-4 lg:px-20 border-white hover:shadow-[-3px_0_0_0_white] transition-shadow duration-500 border-y-[.5px] py-5 lg:py-10 my-8 lg:my-0 border-opacity-20">
      <div className="basis-[40%] flex flex-col gap-3 lg:gap-8 text-left  ">
        <h1 className=" lg:basis-auto text-white font-semibold lg:text-3xl ">
          {title}
        </h1>
        <p className="hidden lg:inline-block font-light text-color-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
      <div className="">
        <Image
          src={src}
          width={500}
          height={500}
          alt={alt}
          className="w-36 lg:w-80 absolute -translate-y-[50%] left-[40%] sm:left-[60%] lg:left-[55%] lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-20"
        ></Image>
      </div>
      <div className="group-hover:bg-color-1 bg-glass group-hover:-rotate-45 transition-all duration-500 rounded-full h-max w-max p-3 lg:p-5 text-white lg:text-xl">
        <FaArrowRightLong></FaArrowRightLong>
      </div>
    </div>
  );
}
