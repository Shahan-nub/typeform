"use client"
import Image from "next/image";
import Glow from "../ui/Glow";
import HeroTitle from "./HeroTitle";
import {motion} from "framer-motion";
import LeftImg from "./LeftImg";
import CenterImg from "./CenterImg";
import RightImg from "./RightImg";
import HeroDescription from "./HeroDescription";
import Wave from "../ui/Wave";
import Rainbow from "../ui/Rainbow";

export default function Hero() {
  return (
    <div className="relative flex flex-col mt-32">
      <Rainbow></Rainbow>
      <Wave></Wave>
      <Glow pos="left-1/4 top-[15vh] md:top-[30vh]" ></Glow>
      <Glow pos="right-1/4 top-[20vh] md:top-[45vh]" ></Glow>

      <HeroTitle></HeroTitle>

      <div className="relative flex w-full h-max justify-center overflow-hidden md:my-20 my-4 md:py-24 py-12">

        <LeftImg></LeftImg>
        <CenterImg></CenterImg>
        <RightImg></RightImg>
      </div>
      <HeroDescription></HeroDescription>
    </div>
  );
}
