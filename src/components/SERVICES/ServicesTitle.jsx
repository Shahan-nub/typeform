"use client"
import React from "react";
import GradientTitle from "../ui/GradientTitle";
import Heading from "../ui/Heading";
import Glow from "../ui/Glow";
import Rainbow from "../ui/Rainbow";
import Wave from "../ui/Wave";
import {motion} from "framer-motion";


export default function ServicesTitle() {
  return (
    <motion.div 
    initial={{y:100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:.5,delay:.2}}
    className="w-full flex flex-col items-center text-center gap-5 relative my-10">
      <Glow pos="left-[15%] lg:left-[35%] top-[60%]"></Glow>
      <Rainbow></Rainbow>
      <Wave></Wave>
      <div className=" mt-9 lg:mt-28 rounded-full bg-gradient-to-r from-[#1a1d43] to-transparent px-3 lg:px-7 py-1 lg:py-2">
        <GradientTitle text="Envision the future, enabled by AI"></GradientTitle>
      </div>

      <Heading
        text1="Making tomorrow's dream "
        text2="today's reality"
      ></Heading>
    </motion.div>
  );
}
