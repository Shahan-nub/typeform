import { FaAtlassian } from "react-icons/fa";
import { RxStretchVertically } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import NavHoverItem from "./NavHoverItem";
import Link from "next/link";
import Logo from "../ui/Logo";

const NAV_LIST = [
  {
    name: "Home",
    itemsArr: [
      { item: "Home One" },
      { item: "Home two" },
      { item: "Home Three" },
    ],
  },
  {
    name: "About",
    itemsArr: [
      { item: "About One" },
      { item: "About two" },
      { item: "About Three" },
    ],
  },
  {
    name: "Services",
    itemsArr: [
      { item: "Home One" },
      { item: "Home two" },
      { item: "Home Three" },
    ],
  },
  {
    name: "Pages",
    itemsArr: [
      { item: "Home One" },
      { item: "Home two" },
      { item: "Home Three" },
    ],
  },
  {
    name: "Portfolio",
    itemsArr: [
      { item: "Home One" },
      { item: "Home two" },
      { item: "Home Three" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="text-white px-2 md:px-4 py-4 md:py-8">
      <div className="flex md:justify-between justify-center gap-8 md:gap-0 items-center">
        {/* logo */}
        <Logo></Logo>

        {/* Navbar list item  */}
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/services">Services</Link>
          <Link href="http://shahan.vercel.app">Portfolio</Link>

        </div>

        {/* Explore our demos */}
        <div className="hidden md:inline-block mr-3 lg:mr-8  text-base md:text-lg bg-[#4c5cf0] rounded-lg py-2 md:py-3 px-2 md:px-4 cursor-pointer max-h-max">
          Explore our demos
        </div>
      </div>
    </div>
  );
}
