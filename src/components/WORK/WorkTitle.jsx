"use client"
import Glow from "../ui/Glow";
import Rainbow from "../ui/Rainbow";
import Wave from "../ui/Wave";
import {motion} from "framer-motion";


export default function WorkTitle() {
  return (
    <motion.div 
    initial={{y:80,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:.45}}
    viewport={{once:true}}
    className="my-8 md:my-16 relative font-sans font-semibold text-lg md:text-5xl text-white text-center w-full">
        <Rainbow></Rainbow>
        <Wave></Wave>
        <Glow pos="left-[7%]"></Glow>
        Great collection of readymade<br/> 
        <span className="text-color-1">unique templates!</span>
    </motion.div>
  )
}
