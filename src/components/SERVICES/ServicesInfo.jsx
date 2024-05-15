import React from "react";
import Heading from "../ui/Heading";
import ServicesInfoCard from "./ServicesInfoCard";
import { BLOB3D } from "@/CONSTANTS/Services3DCardFeature";
import Glow from "../ui/Glow";

export default function ServicesInfo() {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-16 my-8 lg:my-16 items-center text-center">
      <Heading
        text1="Where human minds "
        text2="meet infinite possibilities"
      ></Heading>

      <div className="flex flex-col w-full my-6 lg:my-10 px-4 relative">
        <Glow pos="left-[10%] top-1/4"></Glow>
        <Glow pos="left-[35%] top-2/3"></Glow>

        {BLOB3D.map((obj) => {
          return <ServicesInfoCard title={obj.title} src={obj.src} key={obj.key} alt={obj.alt}></ServicesInfoCard>;
        })}
      </div>
    </div>
  );
}
