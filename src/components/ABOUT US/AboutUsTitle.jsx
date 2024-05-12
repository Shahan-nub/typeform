"use client";
import { TbChartDonutFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import GradientTitle from "../ui/GradientTitle";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import { REVIEWS } from "@/CONSTANTS/Review";
import ReviewCard from "./ReviewCard";

export default function AboutUsTitle() {
  return (
    <div className=" basis-[55%] flex font-sans flex-col justify-between ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="my-8 lg:mb-20 relative text-[#e282f3] text-3xl lg:text-7xl"
      >
        <TbChartDonutFilled className=" animate-infinite-rotate"></TbChartDonutFilled>
        <Glow pos="left-16  "></Glow>
      </motion.div>

      <div className=" my-6 flex gap-4 items-center ">
        <hr className="w-20" />
        <GradientTitle text="About us"></GradientTitle>
      </div>

      <Heading text1="Weaving dreams" text2="into reality with AI"></Heading>

      {/* desc  */}

      <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-400 text-sm lg:text-lg mt-6 lg:mt-10 font-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odit
        ipsam ut velit ipsum et nesciunt esse adipisci. Quod architecto
        aspernatur molestiae incidunt ad quidem assumenda vel necessitatibus
        cumque nemo?
      </motion.div>

        <div className="flex my-5 gap-6 lg:gap-16 lg:my-9">
            {REVIEWS.map((review) => {
                return(
                    <ReviewCard pcent={review.pcent} key={review.text} text={review.text}></ReviewCard>
                )
            })}
        </div>
    </div>
  );
}
