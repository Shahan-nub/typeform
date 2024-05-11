import { FaAtlassian } from "react-icons/fa";
import { RxStretchVertically } from "react-icons/rx";

export default function Logo() {
  return (
    <div className="logo font-serif font-semibold md:font-extrabold text-lg md:text-2xl flex flex-col md:flex-row items-center">
      <div className="flex">
        <FaAtlassian className="text-[#4c5cf0]"></FaAtlassian>
        <RxStretchVertically className="font-bold text-[#4c5cf0]" />
      </div>
      <p className="text-xl md:text-3xl text-white">tech</p>
    </div>
  );
}
