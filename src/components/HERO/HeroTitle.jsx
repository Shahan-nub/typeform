"use client"
import {motion} from "framer-motion";

export default function HeroTitle() {
  return (
    <motion.div 
    initial={{y:25,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:.6}}
    viewport={{once:true}}
    className="w-full flex flex-col items-center font-sans">

        <div className="shadow-[0_70px_200px_30px_#2a4869] md:shadow-none bg-gradient-to-r from-[#1a1d43] to-[#0e0a20] bg-opacity-15 backdrop-blur rounded-full my-6">
          <div className="py-[6px] px-8 text-sm md:text-lg bg-gradient-to-r from-[#6d77ed] to-[#ad4fa1] font-bold inline-block text-transparent bg-clip-text">
            10+ Eye-catching demos
          </div>
        </div>
    
          <div className="text-white text-3xl md:text-7xl font-semibold">Artificial intelligence</div>
          <div className="flex text-3xl md:text-7xl font-semibold">
            <p className="text-white">Webflow</p>
            <p className="text-[#6d77ed]">&nbsp;template</p>
          </div>


      </motion.div>
  )
}
