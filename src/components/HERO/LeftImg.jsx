"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LeftImg() {
  return (
    <div className="absolute hidden xl:inline-block -translate-x-[92%] rounded-2xl p-3 md:p-9 bg-gradient-to-b from-[#121525] via-[#1b2039] to-[#121525]  overflow-hidden">
      <Image
        className=" rounded-lg h-[20vh] md:h-[70vh]"
        src="/assets/hero.png"
        height={800}
        width={1800}
        alt="left"
      ></Image>
    </div>
  );
}
