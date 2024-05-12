"use client";
import WhatWeDo from "./WhatWeDo";
import Glow from "../ui/Glow";
import AboutUsTitle from "./AboutUsTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import InfiniteSlider from "../ui/InfiniteSlider";

export default function AboutUs() {
  return (
    <div className="w-full relative flex flex-col gap-6 py-8">
      <WhatWeDo></WhatWeDo>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-24 px-4 lg:px-10">
        <AboutUsTitle></AboutUsTitle>
        <motion.div
          whileInView={{ y: 80 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="basis-[40%] relative"
        >
          <motion.div
            initial={{y:0}}
            whileInView={{y:400,opacity:[1,1,1,0]}}
            viewport={{once:true}}
            transition={{duration:.6,type:"tween",delay:.3}}
            className="absolute hidden lg:inline-block bg-gradient-to-b from-color-2 via-color-2 to-transparent h-full w-full  rounded-lg "
          ></motion.div>
          <Image
            className="hidden lg:inline-block rounded-lg"
            src="/assets/aboutUs.png"
            width={620}
            height={800}
          ></Image>
        </motion.div>
      </div>
      <InfiniteSlider title="NEXT GEN SMART AI" bg_text_style="text-white bg-glass"></InfiniteSlider>
    </div>
  );
}
