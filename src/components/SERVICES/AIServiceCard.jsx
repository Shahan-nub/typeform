import Image from "next/image";
import React from "react";

export default function AIServiceCard({src,date,title,alt}) {
  return (
    <div className="group flex flex-col py-8 px-6 bg-gradient-to-r from-glass via-[#171c33] to-glass hover:shadow-[0_-1px_0_0_#4c5cf0] text-left gap-3 lg:gap-6 w-max lg:basis-[30%] flex-1 lg:flex-none rounded-sm transition-shadow duration-500">
      <p className="text-white text-opacity-40 font-light text-xs lg:text-base">
{date}
      </p>
      <h1 className="font-semibold text-white text-base lg:text-xl">{title}</h1>
      <div className=" rounded-sm overflow-hidden ">
        <Image
          alt={alt}
          src={src}
          height={1000}
          width={1000}
          className=" rounded-md overflow-clip xl:opacity-80 xl:group-hover:opacity-100 group-hover:scale-110 transition-all duration-500  "
        ></Image>
      </div>
    </div>
  );
}
