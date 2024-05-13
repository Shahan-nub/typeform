import React from "react";
import GradientTitle from "../ui/GradientTitle";
import Heading from "../ui/Heading";
import Glow from "../ui/Glow";
import Rainbow from "../ui/Rainbow";
import Wave from "../ui/Wave";
import AwardCard from "./AwardCard";
import { AWARDS } from "@/CONSTANTS/Awards";

export default function OurAwards() {
  return (
    <div className="w-full flex flex-col my-8 gap-8 lg:gap-10 lg:my-28 py-5 lg:py-10 items-center text-center relative font-sans ">
      <Rainbow></Rainbow>
      <Wave></Wave>
      <br />
      <br />
      <Heading
        text1="Bridging the gap between science "
        text2="fiction and reality"
      ></Heading>
      <GradientTitle text="Our awards"></GradientTitle>
      <div className="text-gray-400 font-light text-xs lg:text-lg w-3/4 lg:w-[55%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus, eveniet ab voluptas repellat incidunt, voluptatibus optio is magni!
      </div>
      <div className="flex flex-col items-center w-full relative">
        <Glow pos="left-[15%] top-16"></Glow>
        <Glow pos="right-[18%] top-40"></Glow>
        <Glow pos="left-[15%] bottom-16"></Glow>


        {AWARDS.map((obj) => {
          return(
            <AwardCard key={obj.id} num={obj.id} award={obj.award} date={obj.date} org={obj.org}/>
          )
        })}
      </div>
    </div>
  );
}
