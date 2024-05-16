"use client";

import ArrowDown from "../ui/ArrowDown";
import Glow from "../ui/Glow";
import GradientTitle from "../ui/GradientTitle";
import Heading from "../ui/Heading";

export default function AboutHeroTitle() {
  return (
    <div className=" relative flex flex-col gap-3 lg:gap-8 items-center text-center my-4 lg:my-12">
        <Glow pos="left-0 -top-1/2"></Glow>
      <GradientTitle text="Envision the future, enabled by AI"></GradientTitle>
      <Heading
        textStyle="lg:text-7xl"
        text1={`Redefining the boundaries `}
        text2={`of human capability`}
      ></Heading>
      <ArrowDown></ArrowDown>
    </div>
  );
}
