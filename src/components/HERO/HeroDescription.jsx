import { MdOutlineWeb } from "react-icons/md";
import Logo from "../ui/Logo";
import {motion} from "framer-motion";


export default function HeroDescription() {
  return (
    <div className="flex flex-col gap-9 lg:flex-row w-full py-6 px-6 md:py-6 md:px-12 font-light relative mb-10 md:mb-24">
      <div className="bg-gradient-to-r from-glass via-[#1f2131] to-glass rounded-sm flex justify-center items-center gap-5 md:gap-8 py-4 md:py-6 px-5 md:px-7">
        <MdOutlineWeb className="text-red-400 text-[10.5rem] md:text-[5rem]"></MdOutlineWeb>
        <motion.div className="flex flex-col gap-5"
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:.5,delay:.2}}
        >
          <div className="h2 text-[white] text-2xl font-normal">
            Multiple designs available
          </div>
          <p className="text-gray-400">
            Send us an email to <span className="text-[#4c5cf0]">shahananwer786@gmail.com</span> after your decision and
            the fully editable Figma file will be delivered to your inbox.
          </p>
        </motion.div>
      </div>

      <motion.div 
      initial={{x:60,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:.5,delay:.2}}
      viewport={{once:true}}
      className="bg-gradient-to-b from-glass via-[#1f2131] to-glass rounded-sm flex flex-col gap-5 items-center py-4 md:py-6 px-5 md:px-7">
        <h1 className="text-transparent bg-gradient-to-b from-gray-400 to-gray-800 bg-clip-text text-5xl md:text-7xl font-bold">
          10+
        </h1>
        <p className="text-gray-400 text-center text-base md:text-lg ">
          Templates for various portfolio & e-commerce websites.
        </p>
        <div className="py-2 px-4 md:py-3 md:px-5 bg-[#1f2131] text-gray-400 text-xs rounded-md flex">
          <p className="font-medium">Designs by:&nbsp;</p>
          <span className="text-white"> Shahan Ali</span>
        </div>
      </motion.div>

      <motion.div 
      initial={{x:60,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:.5,delay:.2}}
      viewport={{once:true}}
      className="bg-gradient-to-b from-glass via-[#1f2131] to-glass rounded-sm flex flex-col justify-between items-center py-4 md:py-6 px-5 md:px-7 text-center">
            <Logo></Logo>
          
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-b from-glass to-gray-500 text-4xl font-bold ">
            UNIQUE
          </h1>
          <p className="text-gray-200 text-sm my-3 text-nowrap md:text-lg">Website templates</p>
          <div className="py-2 px-4 md:py-3 md:px-5 bg-[#1f2131] text-gray-400 text-xs rounded-md flex">
          <p className="font-medium">Elegant designs</p>
        </div>
      </motion.div>
    </div>
  );
}
