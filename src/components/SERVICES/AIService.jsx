import React from "react";
import Heading from "../ui/Heading";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import AIServiceCard from "./AIServiceCard";
import { AI_SERVICES } from "@/CONSTANTS/AiService";

export default function AIService() {
  return (
    <div className="w-full flex flex-col items-center text-center my-6 lg:my-12">
      <Heading
        text1="AI mastery, human harmony"
        text2="  designing tomorrow"
      ></Heading>
      <MdKeyboardDoubleArrowDown className="text-xl lg:text-4xl text-white my-4 lg:my-7"></MdKeyboardDoubleArrowDown>

      <div className="flex flex-wrap lg:flex-nowrap w-full px-4 gap-5 lg:gap-7 items-center justify-center">
        {AI_SERVICES.map((obj) => {
            return(
                <AIServiceCard alt={obj.id} date={obj.date} title={obj.title} src={obj.src} key={obj.id}></AIServiceCard>
            )
        })}
      </div>
    </div>
  );
}
