"use client";
import {motion} from "framer-motion";
import Image from "next/image";

export default function CenterImg() {
  return (
    <motion.div 
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:1}}
    viewport={{once:true}}
    transition={{type:"tween",duration:1}}
    
    className="shadow-[0_0_50px_1px_#0f1a32] md:shadow-none rounded-2xl md:w-auto h w-[93vw] mt-0 md:mt-10 p-3 md:p-8 bg-gradient-to-r from-[#121525] via-[#1e233e] to-[#121525] overflow-hidden ">
      <Image
        className="rounded-xl h-[25vh] md:h-[70vh] md:w-full  shadow-[0_0_50px_1px_#0f1a32]"
        src="/assets/hero.png"
        height={800}
        width={1800}
        alt="center"
      ></Image>
    </motion.div>
  );
}
