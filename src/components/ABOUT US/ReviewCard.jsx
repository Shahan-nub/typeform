"use client"
import {motion} from "framer-motion";

export default function ReviewCard({pcent,text}) {
  return (
    <motion.div 
    initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
    className="flex flex-col gap-3 lg:gap-4 font-semibold">
      <h1 className="text-white text-lg lg:text-4xl">{pcent}</h1>
      <p className="text-xs lg:text-base font-light text-gray-300">
        {text}
      </p>
    </motion.div>
  );
}
