"use client";
import React from "react";
import GradientTitle from "../ui/GradientTitle";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";

export default function WhatWeDoTitle() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col self-start"
    >
      <div className="relative flex my-6 gap-3 items-center">
        <hr className="w-20 text-white" />
        <GradientTitle text="What we do"></GradientTitle>
        <Glow pos="left-5 "></Glow>
      </div>
      <Heading
        text1="Artificial intelligence ready."
        text2=" Embrace change!"
      ></Heading>
    </motion.div>
  );
}
