"use client"
import Image from "next/image";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import {motion} from "framer-motion";


export default function Journey() {
  return (
    <div className="flex w-full my-10  px-5 lg:px-8 justify-between">

      <div className="basis-[45%] hidden lg:flex relative">
        <motion.div
        whileInView={{y:500,opacity:[1,1,1,0]}}
        transition={{duration:1,delay:.3}}
        viewport={{once:true}}
        className="absolute w-full h-full bg-color-1 rounded-lg">
        </motion.div>
        <Image
          src="/assets/Servicesvertical.png"
          alt="services"
          height={800}
          width={700}
          className="rounded-lg"
        ></Image>
      </div>

      <div className="lg:basis-[45%] px-10 lg:px-0 flex flex-col justify-center gap-5 lg:gap-9">
        <Heading
          text1="Your journey into the"
          text2=" future starts now"
        ></Heading>
        <p className="text-color-3 lg:text-xl font-light text-sm w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maxime
          sequi incidunt vel alias excepturi beatae at non, omnis qui?
        </p>
        <ul className="flex flex-col gap-3 lg:gap-6 text-white marker:text-cyan-400 font-medium lg:font-semibold list-disc px-4 lg:px-5 lg:text-lg">
          <li>Create algorithms.</li>
          <li>Opt for the right platform.</li>
          <li>Train the algorithms.</li>
        </ul>
        <div className="w-max">
          <Button text="Get started"></Button>
        </div>
      </div>
    </div>
  );
}
