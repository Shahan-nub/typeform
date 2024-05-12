import Image from "next/image";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";

export default function FeaturesCard({ title, src, id }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-7 rounded-md my-4 lg:my-auto bg-glass lg:hover:bg-glass py-5 lg:py-9 px-4 lg:px-10 text-gray-400">
      <Image src={src} alt={id} height={50} width={50}></Image>
      <h2 className="text-lg lg:text-2xl font-medium text-white">{title}</h2>
      <p className="text-sm lg:text-lg font-light">Lorem ipsum dolor sit.</p>
      <hr />
      <div className="relative group flex gap-4 lg:gap-0 items-center">
        <p className="lg:absolute lg:opacity-0 lg:group-hover:opacity-100  lg:-left-10 lg:group-hover:translate-x-10 transition-all duration-500 font-bold text-white">Read more</p>
        <CgArrowLongRight className="text-xl lg:text-4xl font-thin  lg:group-hover:translate-x-24 transition-all duration-500 "/>
      </div>
    </div>
  );
}
