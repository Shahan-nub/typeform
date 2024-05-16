"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import RotatingText from "../ui/RotatingText";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
      <div className="flex justify-center relative gap-6 w-full my-2 lg:my-6 lg:mb-20 py-3 lg:py-10 ">
        <motion.div
          initial={{ x: 200,opacity:0 }}
          whileInView={{ x: 0,opacity:1 }}
          transition={{ duration: .5 ,type:"tween"}}
          viewport={{ once: true }}
          className="basis-[48%] lg:basis-[45%]"
        >
          <Image
            className=" rounded-sm"
            src="/assets/leaf.jpg"
            height={1000}
            width={1000}
            alt="city"
          ></Image>
        </motion.div>

        <motion.div
          initial={{ x: -200 ,opacity:0}}
          whileInView={{ x: 0,opacity:1 }}
          transition={{ duration: .5 ,type:"tween" }}
          viewport={{ once: true }}
          className="basis-[48%] lg:basis-[45%]"
        >
          <Image
            className=" rounded-sm"
            src="/assets/robot.jpg"
            height={1000}
            width={1000}
            alt="leaf"
          ></Image>
        </motion.div>

        <RotatingText></RotatingText>
      </div>
  );
}
